import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Channelpage from "../pages/channelpage";
import Channelvideo from "../pages/channelvideo";
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000/api/v1";
// axios.defaults.withCredentials = true;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/:userName',
        element:<Channelpage></Channelpage>,
        children:[
          {
            path:'video',
            element:<Channelvideo></Channelvideo>
          }
        ]
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
