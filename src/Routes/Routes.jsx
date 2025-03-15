/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HeroUIProvider } from "@heroui/react";
// Lazy loading components
const Main = lazy(() => import("../Layout/Main"));
const Home = lazy(() => import("../page/Home/Home"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
