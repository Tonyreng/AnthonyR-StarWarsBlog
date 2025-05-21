// Import necessary components and functions from react-router-dom.

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { DescriptionCharacters } from "./pages/DescriptionCharacters";
import { DescriptionSpecies } from "./pages/DescriptionSpecies";
import { DescriptionPlanets } from "./pages/DescriptionPlanets";
import { DescriptionVehicles } from "./pages/DescriptionVehicles";
import { DescriptionStarships } from "./pages/DescriptionStarships";
import { LayoutAll } from "./pages/LayoutAll";
import { All } from "./pages/All";
import { AllCharacters } from "./pages/AllCharacters";
import { AllSpecies } from "./pages/AllSpecies";
import { AllPlanets } from "./pages/AllPlanets";
import { AllVehicles } from "./pages/AllVehicles";
import { AllStarships } from "./pages/AllStarships";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/character/:id", element: <DescriptionCharacters /> },
      { path: "/species/:id", element: <DescriptionSpecies /> },
      { path: "/planets/:id", element: <DescriptionPlanets /> },
      { path: "/vehicles/:id", element: <DescriptionVehicles /> },
      { path: "/starships/:id", element: <DescriptionStarships /> },
    ],
  },
  {
    path: "/all",
    element: <LayoutAll />,
    children: [
      { index: true, element: <All /> },
      { path: "/all/characters", element: <AllCharacters /> },
      { path: "/all/species", element: <AllSpecies /> },
      { path: "/all/planets", element: <AllPlanets /> },
      { path: "/all/vehicles", element: <AllVehicles /> },
      { path: "/all/starships", element: <AllStarships /> },
    ],
  },
]);
