"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fromNodeStream_1 = __importStar(require("./fromNodeStream"));
exports.fromNodeStream = fromNodeStream_1.default;
exports.CustomIterator = fromNodeStream_1.CustomIterator;
var toNodeStream_1 = __importDefault(require("./toNodeStream"));
exports.toNodeStream = toNodeStream_1.default;
//# sourceMappingURL=index.js.map