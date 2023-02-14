import React from "react";
import type { SkiaValue } from "@shopify/react-native-skia";
import {
  BlurMask,
  Easing,
  Group,
  useLoop,
  useComputedValue,
  vec,
  Circle,
  Fill,
  polar2Canvas,
  mix,
} from "@shopify/react-native-skia";

const c1 = "#61bea2";
const c2 = "#529ca0";

interface RingProps {
  index: number;
  progress: SkiaValue<number>;
  width: number;
  height: number;
}

export const Ring = ({ index, progress, width, height }: RingProps) => {
  const R = width / 4;
  const center = vec(width / 2, height / 2 - 64);

  const theta = (index * (2 * Math.PI)) / 6;
  const transform = useComputedValue(() => {
    const { x, y } = polar2Canvas(
      { theta, radius: progress.current * R },
      { x: 0, y: 0 }
    );
    const scale = mix(progress.current, 0.3, 1);
    return [{ translateX: x }, { translateY: y }, { scale }];
  }, [progress, R]);

  return (
    <Circle
      c={center}
      r={R}
      color={index % 2 ? c1 : c2}
      origin={center}
      transform={transform}
    />
  );
};

interface BreatheProps {
  width: number;
  height: number;
}

export const Breathe = ({ width, height }: BreatheProps) => {
  console.log({ width, height });
  const center = vec(width / 2, height / 2 - 64);
  const progress = useLoop({
    duration: 3000,
    easing: Easing.inOut(Easing.ease),
  });
  const transform = useComputedValue(
    () => [{ rotate: mix(progress.current, -Math.PI, 0) }],
    [progress]
  );

  return (
    <React.Fragment>
      <Fill color="rgb(36,43,56)" />
      <Group origin={center} transform={transform} blendMode="screen">
        <BlurMask style="solid" blur={40} />
        {new Array(6).fill(0).map((_, index) => {
          return (
            <Ring
              key={index}
              index={index}
              progress={progress}
              width={width}
              height={height}
            />
          );
        })}
      </Group>
    </React.Fragment>
  );
};