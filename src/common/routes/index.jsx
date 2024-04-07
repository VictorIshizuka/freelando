import { createBrowserRouter } from "react-router-dom";
import ClientSelection from "../../modules/ClientSelection";

import { LayoutBase } from "../layout/LayoutBase";
import { LayoutBaseCard } from "../layout/LayoutCard";
import { Conclueded } from "../../modules/client/pages/Conclueded";
import { InterestsClient } from "../../modules/client/pages/Interests";
import { DataPersonal } from "../../modules/client/pages/Personal-data";

export const router = createBrowserRouter([
  {
    element: <LayoutBase />,
    path: "/",
    children: [
      {
        path: "register",
        element: <LayoutBaseCard />,
        children: [
          {
            path: "",
            element: <ClientSelection />,
          },
          {
            path: "interests",
            element: <InterestsClient />,
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
