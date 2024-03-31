import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/loader";
import { useEffect, useState } from "react";
import instance from "../utils/axiosConfig";

const Channeltweet = () => {
  const { userName } = useParams();
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useFetchData(`/users/channel/${userName}`);
  const { _id, avatar } = data?.data || {};

  // const { data: tweetData, loading } = useFetchData(`/tweet/${_id}`);
  // const tweets = tweetData?.data || [];

  useEffect(() => {
    if (_id) {
      instance
        .get(`/tweet/${_id}`)
        .then((res) => {
          setTweets(res?.data?.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [_id]);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="border-2 p-2 rounded-lg border-gray-500 mb-3">
          {tweets.map((data) => (
            <div className="flex items-start gap-5" key={data._id}>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={avatar} />
                </div>
              </div>
              <div>
                <p className="text-sm">{userName}</p>
                <p className="text-xl">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Channeltweet;
