import Subscribebutton from "../components/ui/subscribebutton";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const Channelpage = () => {
  const { userName } = useParams();
  const {data:authData} = useContext(AuthContext)

  const { data } = useFetchData(`/users/channel/${userName}`);


  const {
    avatar,
    fullName,
    coverImage,
    subscriberCount,
    isSubscribed,
  } = data?.data || {};

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
          <div className="flex items-center gap-1">
            <h2>@{userName}</h2>
            <span>-</span>
            <p>{subscriberCount} subscribers</p>
          </div>
          {authData.data?.userName !== userName && (
            <Subscribebutton isSubscribed={isSubscribed}></Subscribebutton>
          )}
        </div>
      </div>
      <div>
        <ul className="menu menu-horizontal ">
          <li>
            <Link to={`video`}>Videos</Link>
          </li>
          <li>
            <Link to={"tweet"}>Tweet</Link>
          </li>
          <li>
            <Link to={"subscription"}>Subscription</Link>
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
