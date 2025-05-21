import React from "react";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


const Page = {
  Home: {
    name: "HOME",
    path: "/",
    element: React.createElement(Home),
  },
  Destination: {
    name: "DESTINATION",
    path: "/destination",
    element: React.createElement(Destination),
  },
  Crew: {
    name: "CREW",
    path: "/crew",
    element: React.createElement(Crew),
  },
  Technology: {
    name: "TECHNOLOGY",
    path: "/technology",
    element: React.createElement(Technology),
  },
} as const;

type Page = (typeof Page)[keyof typeof Page];

// this exports the type not the const object
export default Page;
