import React, { Children } from "react";
import "swiper/swiper-bundle.css";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles/general.css";
// import Header from "./components/header";
// import Slider from "./components/slider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/contact";
import Routing from "./routing/routing";
import Main from "./pages/main";
import Fields from "./components/fields";
import Fieldsingle from "./components/fieldsingle";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routing />,
      children: [
        {
          path: "/",
          element: <Main />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/fields",
          element: <Fields />,
        },

        {
          path: "/fields/:fieldname",
          element: <Fieldsingle />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
