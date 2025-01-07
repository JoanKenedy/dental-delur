import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import "./App.css";
import { Testimonios } from "./pages/Testimonios";
import { Servicios } from "./pages/Servicios";
import { Odontopediatria } from "./pages/Odontopediatria";
import { ArmonizacionFacial } from "./pages/ArmonizacionFacial";
import { Ortodoncia } from "./pages/Ortodoncia";
import { Endodoncia } from "./pages/Endodoncia";

import { CirugiaMaxilofacial } from "./pages/CirugiaMaxilofacial";
import { Implantologia } from "./pages/Implantologia";
import { Periodoncia } from "./pages/Periodoncia";

import { Promociones } from "./pages/Promociones";

import { Ubicaciones } from "./pages/Ubicaciones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: false,
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        index: false,
        path: "/servicios",
        element: <Servicios />,
      },
      {
        path: "/testimonios",
        element: <Testimonios />,
      },
      {
        path: "/promociones",
        element: <Promociones />,
      },
      {
        path: "/ubicacion",
        element: <Ubicaciones />,
      },
      {
        path: "/odontopediatria",
        element: <Odontopediatria />,
      },
      {
        path: "/armonizacion-facial",
        element: <ArmonizacionFacial />,
      },
      {
        path: "/ortodoncia",
        element: <Ortodoncia />,
      },
      {
        path: "/endodoncia",
        element: <Endodoncia />,
      },

      {
        path: "/cirugia-maxilofacial",
        element: <CirugiaMaxilofacial />,
      },
      {
        path: "/implantologia",
        element: <Implantologia />,
      },
      {
        path: "/periodoncia",
        element: <Periodoncia />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
