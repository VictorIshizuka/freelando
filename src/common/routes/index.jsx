import { createBrowserRouter } from "react-router-dom";
import ClientSelection from "../../modules/ClientSelection";

import { LayoutBase } from "../layout/LayoutBase";
import { LayoutBaseCard } from "../layout/LayoutCard";
import { Concluded } from "../../modules/client/pages/Concluded";
import { InterestsClient } from "../../modules/client/pages/Interests";
import { DataPersonal } from "../../modules/client/pages/Personal-data";
import { HomePage } from "../../modules/home-page";
import { Login } from "../../modules/auth/page";
import { ClientHome } from "../../modules/client/pages/ClientHome";
import { Profile } from "../../modules/profile";
import ProtectedRoute from "../authVerify";
import { Pagina404 } from "../../modules/notFound";

export const router = createBrowserRouter([
  {
    element: <LayoutBase />,
    path: "/",
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <Login /> },
      {
        path: "area-logada",

        children: [
          {
            path: "profile",
            element: <ProtectedRoute />,
            children: [
              {
                element: <Profile />,
              },
            ],
          },
          {
            path: "home",
            element: <ProtectedRoute />,
            children: [
              {
                element: <ClientHome />,
              },
            ],
          },
        ],
      },
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
            path: "concluded",
            element: <Concluded />,
          },
        ],
      },
      { path: "erro", element: <Pagina404 /> },
    ],
  },
]);
