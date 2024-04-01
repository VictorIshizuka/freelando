import { createBrowserRouter } from "react-router-dom";

import DataPersonal from "../../modules/client/pages/personal-data";
import HomePage from "../../modules/HomePage";
import { LayoutBase } from "../layout/layoutBase";
import LayoutBaseCard from "../layout/layoutCard";
import RegisterClient from "../../modules/client/pages/interests";
import { Conclueded } from "../../modules/client/pages/conclueded";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "register",
        element: <LayoutBaseCard />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "interests",
            element: <RegisterClient />,
          },
          {
            path: "personal-data",
            element: <DataPersonal />,
          },
          {
            path: "conclueded",
            element: <Conclueded />,
          },
        ],
      },
    ],
  },
]);
