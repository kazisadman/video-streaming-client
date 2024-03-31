import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Channelpage from "../pages/channelpage";
import Channelvideo from "../pages/channelvideo";
import Channeltweet from "../pages/channeltweet";
import Channelsubscription from "../pages/channelsubscription";
import Upload from "../pages/upload";

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
        path: "/:userName",
        element: <Channelpage></Channelpage>,
        children: [
          {
            path: "video",
            element: <Channelvideo></Channelvideo>,
          },
          { path: "tweet", element: <Channeltweet></Channeltweet> },
          {
            path:'subscription',
            element:<Channelsubscription></Channelsubscription>
          }
        ],
      },
      {
        path:'/:userName/upload',
        element:<Upload></Upload>
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
