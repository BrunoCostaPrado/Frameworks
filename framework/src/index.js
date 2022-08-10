"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
import Framework from "./core/Framework";
const routes_1 = __importDefault(require("./routes"));
new Framework(routes_1.default).init();
