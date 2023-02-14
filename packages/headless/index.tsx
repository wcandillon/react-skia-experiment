import React from "react";
import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb";
import { draw } from "./draw";

declare global {
  var SkiaApi: any;
  var SkiaValueApi: any;
}

global.window = {} as any;
global.requestAnimationFrame = (f: FrameRequestCallback) => {
  setImmediate(()=>f(Date.now()));
  return 0;
}

(async () => {
  const width = 256;
  const height = 256;
  await LoadSkiaWeb();
  const {JsiSkApi} = require("@shopify/react-native-skia/lib/commonjs/skia/web");
  global.SkiaApi = JsiSkApi(CanvasKit);
  global.SkiaValueApi = require("@shopify/react-native-skia/lib/commonjs/values/web").ValueApi;
  console.log(global.SkiaValueApi);
  const Skia = global.SkiaApi;
  const Breathe = require('@example-app/shared').Breathe;
  const image = draw(Skia,
    <Breathe width={width} height={height} />, width, height);
  console.log(image.encodeToBase64());
})();