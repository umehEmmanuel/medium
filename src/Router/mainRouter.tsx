import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Blocks/Layout";
import Home from "../Pages/Home";
import Register from "../Pages/authPages/Register";
import Signin from "../Pages/authPages/Signin";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path:"/register" ,
    element:<Register/>
  },
  {
    path:"/sign-in" ,
    element:<Signin/>
  }
]);
