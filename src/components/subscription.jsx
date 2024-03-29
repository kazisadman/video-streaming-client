import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useFetchData from "../hooks/useFetchData";
import Loader from "./loader";

const Subscription = () => {
  const { data: authData } = useContext(AuthContext);
  const fetcheData = useFetchData(`/subscribe/user/${authData._id}`);
  const { data, error, loading } = fetcheData;
  const channelInfo = data?.data || [];
  console.log(error)

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
            <h1>{channel.userName}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default Subscription;
