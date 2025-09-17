import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main.jsx";
import App from "../App.jsx"
import FestivalList from "../components/festivals/FestivalList.jsx";
import FestivalShow from "../components/festivals/FestivalShow.jsx";

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
      },
      {
        path: '/festivals/:id',
        element: <FestivalShow />
      }
    ]
   } 
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;

// path 지정할 때 중복되는 점이 없는지 조심해야된다. 
// RESTful 가치관에 부합한 세그미터 파라미터쓰는 건 필수다. 

// 상세 타이틀 이미지 