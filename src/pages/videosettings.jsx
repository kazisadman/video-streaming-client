import Videotable from "./video/videotable";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/loader";
import Emptydata from "../components/emptydata";

const Videosettings = () => {
  const { data, loading } = useFetchData("/dashboard/videos");
  const videosInfo = data?.data || [];

  return (
    <div>
      {loading ? (
        <Loader size="sm"></Loader>
      ) : (
        <div>
          {videosInfo.length === 0 ? (
            <Emptydata contentType={"videos"}></Emptydata>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Video</th>
                    <th>Title</th>
                    <th></th>
                    <th>Thumbnail</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {videosInfo.map((video) => (
                    <Videotable key={video._id} videoData={video}></Videotable>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Videosettings;
