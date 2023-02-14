import React from "react";

import { Breathe } from '@example-app/shared';
import {Canvas} from "@shopify/react-native-skia/lib/module/dom";

const width = window.innerWidth;
const height = window.innerHeight;

function App() {
  return (
    <Canvas style={{ width, height }}>
      <Breathe width={width} height={height} />
    </Canvas>
  );
}

export default App;