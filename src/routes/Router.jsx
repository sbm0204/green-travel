import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main.jsx";
import App from "../App.jsx"
import FestivalList from "../components/festivals/FestivalList.jsx";

const router = createBrowserRouter([
   {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      }, 
      {
        path: '/festivals',
        element: <FestivalList />
      }
    ]
   } 
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;
