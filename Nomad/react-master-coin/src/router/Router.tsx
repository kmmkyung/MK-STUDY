import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart";
import Price from "./Price";

const Router = createBrowserRouter([
  { path:'/',
    element: <App/>,
    children: [
      { path:"", element:<Coins/>},
      { path:":coinId", element:<Coin/>,
        children:[
        { path:"chart", element:<Chart/>},
        { path:"price", element:<Price/>},
      ]},
    ]
  }  
],
{basename: `${process.env.PUBLIC_URL}`}
);

export default Router;