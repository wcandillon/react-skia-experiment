"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breathe = exports.Ring = void 0;
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@shopify/react-native-skia/lib/commonjs/renderer");
const values_1 = require("@shopify/react-native-skia/lib/commonjs/values");
const animation_1 = require("@shopify/react-native-skia/lib/commonjs/animation");
const c1 = "#61bea2";
const c2 = "#529ca0";
const Ring = ({ index, progress, width, height }) => {
    const R = width / 4;
    const center = { x: width / 2, y: height / 2 - 64 };
    const theta = (index * (2 * Math.PI)) / 6;
    const transform = (0, values_1.useComputedValue)(() => {
        const { x, y } = (0, renderer_1.polar2Canvas)({ theta, radius: progress.current * R }, { x: 0, y: 0 });
        const scale = (0, renderer_1.mix)(progress.current, 0.3, 1);
        return [{ translateX: x }, { translateY: y }, { scale }];
    }, [progress, R]);
    return (react_1.default.createElement(renderer_1.Circle, { c: center, r: R, color: index % 2 ? c1 : c2, origin: center, transform: transform }));
};
exports.Ring = Ring;
const Breathe = ({ width, height }) => {
    console.log({ width, height });
    const center = { x: width / 2, y: height / 2 - 64 };
    const progress = (0, animation_1.useLoop)({
        duration: 3000,
        easing: animation_1.Easing.inOut(animation_1.Easing.ease),
    });
    const transform = (0, values_1.useComputedValue)(() => [{ rotate: (0, renderer_1.mix)(progress.current, -Math.PI, 0) }], [progress]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(renderer_1.Fill, { color: "rgb(36,43,56)" }),
        react_1.default.createElement(renderer_1.Group, { origin: center, transform: transform, blendMode: "screen" },
            react_1.default.createElement(renderer_1.BlurMask, { style: "solid", blur: 40 }),
            new Array(6).fill(0).map((_, index) => {
                return (react_1.default.createElement(exports.Ring, { key: index, index: index, progress: progress, width: width, height: height }));
            }))));
};
exports.Breathe = Breathe;
