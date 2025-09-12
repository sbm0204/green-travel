import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main.jsx";
import App from "../App.jsx"

const router = createBrowserRouter([
   {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
   } 
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;
