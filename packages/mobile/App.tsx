/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import '@shopify/react-native-skia/lib/module/native';
import {Canvas} from '@shopify/react-native-skia';
import {Breathe} from '@example-app/shared';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

function App(): JSX.Element {
  return (
    <Canvas style={{flex: 1}}>
      <Breathe width={width} height={height} />
    </Canvas>
  );
}

export default App;
