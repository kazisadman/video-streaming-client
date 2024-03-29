import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Subscribebutton from "../components/ui/subscribebutton";
import { Link, Outlet } from "react-router-dom";

const Channelpage = () => {
      const { data, error, loading } = useContext(AuthContext);
      console.log(error);

      const { avatar, fullName,coverImage,userName } = data || {};

    return (
      <div className="px-4">
        <div>
          <div
            className="hero h-40"
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
          ></div>
        </div>
        <div className="py-5 flex items-center gap-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h1 className="text-5xl">{fullName}</h1>
            <h2>@{userName}</h2>
            <Subscribebutton></Subscribebutton>
          </div>
        </div>
        <div>
          <ul className="menu menu-horizontal ">
            <li>
              <Link to={`video`}>Videos</Link>
            </li>
            <li>
              <a>Tweet</a>
            </li>
            <li>
              <a>Subscription</a>
            </li>
          </ul>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Channelpage;