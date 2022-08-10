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

export default routes;
