import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Videocard = ({ videoData }) => {
  const { thumbnail, duration, title, views,_id } = videoData;
  const { avatar, userName } = videoData.ownerdetails;

  const minutes = Math.floor(duration / 60);
  const second = Math.round(duration % 60);

  const formatedMinutes = minutes.toString().padStart(2, "0");
  const formatedSecond = second.toString().padStart(2, "0");
  return (
    <div>
      <Link to={`/play/${_id}`} className="card card-compact bg-base-100 ">
        <figure className="relative">
          <img src={thumbnail} alt="thumbnail" className="h-40 w-full" />
          <div className="badge badge-neutral absolute bottom-1 right-1">{`${formatedMinutes}:${formatedSecond}`}</div>
        </figure>
        <div className="flex p-4 gap-2 item">
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{title}</h2>
            <Link to={`/${userName}/video`} className="text-sm">{userName}</Link>
            <p className="text-sm">{views} views</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Videocard.propTypes = {
  videoData: PropTypes.object,
};

export default Videocard;
