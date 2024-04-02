import Loader from "../components/loader";
import Videocard from "../components/videocard";
import useFetchData from "../hooks/useFetchData";

const Watchhistory = () => {
  const { data, loading } = useFetchData("/users/watch-history");

  const watchHistory = data?.data || [];
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {watchHistory.map((video) => (
            <Videocard key={video._id} videoData={video}></Videocard>
          ))}
        </div>
      )}
    </div>
  );
};

Watchhistory.propTypes = {};

export default Watchhistory;
