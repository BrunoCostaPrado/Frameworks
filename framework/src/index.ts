const Framework = require("./core/Framework");
import routes from "./routes";

new Framework(routes).init();
