import { Routes, Route } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { LayOut } from "../layout";
import { About } from "../page/about";
import { Home } from "../page/home";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];

export default routes;
