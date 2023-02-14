import { Skia } from "@shopify/react-native-skia/lib/typescript/src/skia/types";
import type { ReactNode } from "react";


export const draw = (Skia: Skia, element: ReactNode, width: number, height: number) => {
  const {SkiaRoot} = require("@shopify/react-native-skia/lib/commonjs/renderer/Reconciler");
  const {JsiDrawingContext} = require("@shopify/react-native-skia/lib/commonjs/dom/nodes");
  const surface = Skia.Surface.MakeOffscreen(width, height);
  if (surface === null) {
    throw new Error("Couldn't create surface!");
  }
  const root = new SkiaRoot(Skia);
  root.render(element);
  const canvas = surface.getCanvas();
  root.dom.render(new JsiDrawingContext(Skia, canvas));
  surface.flush();
  const image = surface.makeImageSnapshot();
  return image;
};