import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import Subscribebutton from "../components/ui/subscribebutton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Videoplayer = () => {
  const { videoId } = useParams();
  const { data: authData } = useContext(AuthContext);

  const { data } = useFetchData(`/video/${videoId}`);

  const { title, description, videoFile, views } = data?.data || {};
  const { avatar, userName } = data?.data?.owner || {};

  const { data: channelData } = useFetchData(`/users/channel/${userName}`);

  const { fullName, channelSubscribedCount, subscriberCount, isSubscribed } =
    channelData?.data || {};


  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          url={videoFile}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
          volume={1}
        ></ReactPlayer>
      </div>
      <div>
        <h2 className="font-semibold my-2">{title}</h2>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <Link to={`/${userName}/video`} className="text-lg font-semibold">
              {fullName}
            </Link>
            <p className="text-md">{subscriberCount} Subscribers</p>
          </div>
          {authData?.data?.userName !== userName && (
            <Subscribebutton isSubscribed={isSubscribed}></Subscribebutton>
          )}
        </div>
      </div>
      <div className="bg-gray-300 rounded-2xl p-2 my-3">
        <p className="font-bold text-lg">{views} views</p>
        <p className="text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default Videoplayer;
