/// <reference types="react" />
import type { SkiaValue } from "@shopify/react-native-skia";
interface RingProps {
    index: number;
    progress: SkiaValue<number>;
    width: number;
    height: number;
}
export declare const Ring: ({ index, progress, width, height }: RingProps) => JSX.Element;
interface BreatheProps {
    width: number;
    height: number;
}
export declare const Breathe: ({ width, height }: BreatheProps) => JSX.Element;
export {};
