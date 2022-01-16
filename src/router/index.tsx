import { Routes, Route } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { LayOut } from "../layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <div>我是about</div>,
      },
      {
        path: "/home",
        element: <div>我是home</div>,
      },
    ],
  },
];

export default routes;
