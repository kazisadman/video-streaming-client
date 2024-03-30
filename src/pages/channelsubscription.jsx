import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const Channelsubscription = () => {
      const { userName } = useParams();

      const { data } = useFetchData(`/users/channel/${userName}`);

      const {
        channelSubscribedCount,
      } = data?.data || {};

    return (
        <div>
            {channelSubscribedCount}
        </div>
    );
};

export default Channelsubscription;