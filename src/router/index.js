import React from "react";
import { Redirect } from "react-router-dom";
import Discover from "@/pages/discover";
const Friend = React.lazy((_) => import("../pages/friend"));
const Mine = React.lazy((_) => import("../pages/mine"));
const Recommend = React.lazy(() =>
  import("@/pages/discover/c-pages/recommend/index")
);

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
