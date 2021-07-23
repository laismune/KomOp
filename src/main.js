//When we have a data-link attribute we must go to an url instead of refreshing the page;
const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    {path: "/", view: () => console.log("Viewing Dashboard")},
    {path: "/posts", view: () => console.log("Viewing Posts")},
    {path: "/settings", view: () => console.log("Viewing Settings")}
  ];

  const potentialMatches = routes.map(route => {
    return {
      route:route,
      isMatch:location.pathname === route.path
    }
  })
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  //If there is no match, we will adress to the index.html (dashboard with array index = 0)
  //We could adress to a 404 error page as well;
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }
  console.log(match.route.view())
};

window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});