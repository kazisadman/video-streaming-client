import { FaVideo } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";
const Channelsidebar = () => {
  return (
    <div>
      <div className="divider divider-neutral"></div>
      <h1 className="text-lg">You &gt;</h1>
      <ul className="menu p-4 w-full min-h-full bg-white  text-base-content">
        {/* Sidebar content here */}
        <li>
          <Link>
            <GrChannel className="text-2xl"></GrChannel>Your channel
          </Link>
        </li>
        <li>
          <Link>
            <MdHistory className="text-2xl"></MdHistory>Watch history
          </Link>
        </li>
        <li>
          <Link>
            <FaVideo className="text-2xl"></FaVideo>Your videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Channelsidebar;
