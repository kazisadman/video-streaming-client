import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Searchvideocard = ({videoData}) => {
      const { thumbnail, duration, title, views, _id,description } = videoData;
      const { avatar, userName } = videoData.ownerdetails;

        const minutes = Math.floor(duration / 60);
        const second = Math.round(duration % 60);

        const formatedMinutes = minutes.toString().padStart(2, "0");
        const formatedSecond = second.toString().padStart(2, "0");

    return (
      <div>
        <Link to={`/play/${_id}`} className="flex flex-col lg:flex-row items-start">
          <figure className="relative">
            <img src={thumbnail} alt="thumbnail" className="w-full lg:w-96" />
            <div className="badge badge-neutral absolute bottom-1 right-1">{`${formatedMinutes}:${formatedSecond}`}</div>
          </figure>
          <div className="p-4">
            <div>
              <h2 className="font-semibold">{title}</h2>
              <p className="text-sm">{views} views</p>
            </div>
            <div>
              <div className="avatar flex gap-2 items-center my-2">
                <div className="w-10 rounded-full">
                  <img src={avatar} />
                </div>
                <Link to={`/${userName}/video`} className="text-sm">
                  {userName}
                </Link>
              </div>
                <p>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
};

Searchvideocard.propTypes = {
    videoData:PropTypes.object
};

export default Searchvideocard;