import Emptydata from "../components/emptydata";
import Loader from "../components/loader";
import Videocard from "../components/videocard";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const { data, loading } = useFetchData("/video/");
  const videosInfo = data.data?.docs || [];
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

export default Home;
