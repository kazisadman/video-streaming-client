import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loader from "./loader";
import { Link } from "react-router-dom";
import instance from "../utils/axiosConfig";

const Subscription = () => {
  const { data: authData } = useContext(AuthContext);
  const [fetchData, setFetchData] = useState({});
  const { data } = fetchData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authData.data?._id) {
      instance
        .get(`/subscribe/user/${authData.data?._id}`)
        .then((res) => {
          setFetchData(res);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [authData]);
  const channelInfo = data?.data || [];

  return (
    <div>
      <div className="divider divider-neutral"></div>
      <h1 className="text-lg">Subscription</h1>
      {loading ? (
        <Loader></Loader>
      ) : (
        channelInfo.map((channel) => (
          <div className="flex items-center gap-3 my-3" key={channel._id}>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={channel.avatar} />
              </div>
            </div>
            <Link to={`/${channel.userName}/video`}>{channel.fullName}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Subscription;
