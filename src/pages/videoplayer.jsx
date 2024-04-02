import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import Subscribebutton from "../components/ui/subscribebutton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Commentform from "../components/ui/commentform";
import Videocomment from "../components/videocomment";
import { useState, useEffect } from "react";
import instance from "../utils/axiosConfig";
import Loader from "../components/loader";
import Avatar from "../components/ui/avatar";

const Videoplayer = () => {
  const [channelData, setChannelData] = useState({});
  const [loading, setLoading] = useState(true);

  const { videoId } = useParams();
  const { data: authData } = useContext(AuthContext);

  const { data } = useFetchData(`/video/${videoId}`);

  const { title, description, videoFile, views } = data?.data || {};
  const { avatar, userName } = data?.data?.owner || {};

  useEffect(() => {
    if (userName) {
      instance
        .get(`/users/channel/${userName}`)
        .then((res) => {
          setChannelData(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [userName]);

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
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <div>
            <h2 className="font-semibold my-2 text-lg">{title}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Avatar size={'10'} url={avatar}></Avatar>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Link
                  to={`/${userName}/video`}
                  className="text-lg font-semibold"
                >
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
            <p className="font-bold ">{views} views</p>
            <p className="text-wrap">{description}</p>
          </div>
          <p className="text-2xl font-bold mt-1">Comment</p>
          <Commentform videoId={videoId}></Commentform>
          <Videocomment videoId={videoId}></Videocomment>
        </div>
      )}
    </div>
  );
};

export default Videoplayer;
