import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Explorer from "../pages/Explorer/Explorer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: "/explorer",
    element: (
      <MainLayout>
        <Explorer />
      </MainLayout>
    ),
  },
]);