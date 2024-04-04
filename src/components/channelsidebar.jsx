import { FaTwitter } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { RiVideoUploadFill } from "react-icons/ri";
import { MdOutlineVideoSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const Channelsidebar = () => {
  const { data } = useContext(AuthContext);

  return (
    <div>
      <div className="divider divider-neutral"></div>
      <h1 className="text-lg">You &gt;</h1>
      <ul className="menu p-4 w-full min-h-full bg-white  text-base-content">
        {/* Sidebar content here */}
        <li>
          <Link to={`/${data?.data?.userName}/video`}>
            <GrChannel className="text-2xl"></GrChannel>Your channel
          </Link>
        </li>
        <li>
          <Link to={`/${data?.data?.userName}/watch-history`}>
            <MdHistory className="text-2xl"></MdHistory>Watch history
          </Link>
        </li>
        <li>
          <Link to={`/${data?.data?.userName}/post`}>
            <FaTwitter className="text-2xl"></FaTwitter>Tweet
          </Link>
        </li>
        <li>
          <Link to={`/${data?.data?.userName}/upload`}>
            <RiVideoUploadFill className="text-2xl"></RiVideoUploadFill>Upload
          </Link>
        </li>
        <li>
          <Link to={`/${data?.data?.userName}/upload`}>
            <MdOutlineVideoSettings className="text-2xl"></MdOutlineVideoSettings>
            Video Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Channelsidebar;
