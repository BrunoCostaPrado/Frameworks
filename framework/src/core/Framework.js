let routeList = [];
export default class Framework {
  constructor(routes) {
    routeList = routes;
    return this;
  }
  matchRouse(route1, route2) {
    if (route1 == route2) {
      return true;
    }
    return false;
  }
  navigate(url) {
    routeList.forEach((route) => {
      if (this.matchRouse(route.path, url)) {
        document.getElementById("application").innerHTML = route
          .controller()
          .view();
      }
    });
  }
  init() {
    this.navigate(window.location.pathname);
  }
}
