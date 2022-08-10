"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Home = require("./controllers/Home.js");
const Contact = require("./controllers/Contact.js");
const routes = [
  {
    path: "/",
    controller: Home,
  },
  {
    path: "/contact",
    controller: Contact,
  },
];
exports.default = routes;
