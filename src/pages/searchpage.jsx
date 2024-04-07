import { useParams } from "react-router-dom";
import instance from "../utils/axiosConfig";
import { useState } from "react";
import Loader from "../components/loader";
import { useEffect } from "react";
import Searchvideocard from "../components/searchvideocard";
import Emptydata from "../components/emptydata";

const Searchpage = () => {
  const { querytext } = useParams();
  const [videosInfo, setVideosInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("/video/", {
        params: {
          query: { querytext },
        },
      })
      .then((res) => {
        console.log(res);
        setVideosInfo(res.data.data?.docs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [querytext]);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          {videosInfo.length === 0 ? (
            <Emptydata contentType={"videos"}></Emptydata>
          ) : (
            <div className="flex flex-col gap-2">
              {videosInfo.map((videos) => (
                <Searchvideocard
                  key={videos._id}
                  videoData={videos}
                ></Searchvideocard>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchpage;
