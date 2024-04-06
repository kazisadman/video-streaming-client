import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Videocard from "../components/videocard";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";
import instance from "../utils/axiosConfig";
import Emptydata from "../components/emptydata";

const Channelvideo = () => {
  const { userName } = useParams();
  const [loading, setLoading] = useState(true);
  const [videosInfo, setVideosInfo] = useState([]);

  const { data: userData } = useFetchData(`/users/channel/${userName}`);

  useEffect(() => {
    if (userData?.data?._id) {
      instance
        .get("/video/", {
          params: {
            userId: `${userData?.data?._id}`,
          },
        })
        .then((res) => {
          setVideosInfo(res.data.data?.docs);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [userData]);

  return (
    <div className="py-5">
      {loading ? (
        <Loader size="sm"></Loader>
      ) : (
        <div>
          {videosInfo.length === 0 ? (
            <Emptydata contentType={'videos'}></Emptydata>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              {videosInfo.map((video) => (
                <Videocard key={video._id} videoData={video}></Videocard>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Channelvideo;
