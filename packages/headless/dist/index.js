"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LoadSkiaWeb_1 = require("@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb");
const draw_1 = require("./draw");
global.window = {};
global.requestAnimationFrame = (f) => {
    setImmediate(() => f(Date.now()));
    return 0;
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const width = 256;
    const height = 256;
    yield (0, LoadSkiaWeb_1.LoadSkiaWeb)();
    const { JsiSkApi } = require("@shopify/react-native-skia/lib/commonjs/skia/web");
    global.SkiaApi = JsiSkApi(CanvasKit);
    global.SkiaValueApi = require("@shopify/react-native-skia/lib/commonjs/values/web").ValueApi;
    console.log(global.SkiaValueApi);
    const Skia = global.SkiaApi;
    const Breathe = require('@example-app/shared').Breathe;
    const image = (0, draw_1.draw)(Skia, react_1.default.createElement(Breathe, { width: width, height: height }), width, height);
    console.log(image.encodeToBase64());
}))();
