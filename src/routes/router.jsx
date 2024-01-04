import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import Details from "../pages/Details"

export const routesGen = {
  home: "/",
  searchResult: "/search-result",
  detail:"/detail"
};

const routes = [
  {
    index: true,
    element: <Home />,
    state: "home",
  },
  {
    path: "/detail/:tourid",
    element: <Details />,
    state: "detail",
  },
  {
   path: "/search",
    element: <SearchResult />,
    state: "search",
  },

];

export const headerRoutes =[
  {
    index: true,
    path:"/",
    element: <Home />,
    state: "Destination",
  },
  {
    path: "/detail/:tourid",
    element: <Details />,
    state: "Activities",
  },
  {
   path: "/search",
    element: <SearchResult />,
    state: "Specials",
  },
]

export default routes;