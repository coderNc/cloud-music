import React from 'react';
// import { Redirect } from "react-router-dom";
import Discover from '@/pages/discover';
const Friend = React.lazy(_ => import("../pages/friend"));
const Mine = React.lazy(_ => import("../pages/mine"));

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  },
];

export default routes;