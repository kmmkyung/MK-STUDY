import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../router/Home";
import Tv from "./Tv";
import Search from "./Search";

const Router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    children: [
      {path:'/', element: <Home/>},
      {path:'/movies/:movieId', element: <Home/>},
      {path:'/tv', element: <Tv/>},
      {path:'/search', element: <Search/>},
    ]
  }
])

export default Router;