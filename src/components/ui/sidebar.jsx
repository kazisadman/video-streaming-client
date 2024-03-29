import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import Loginbutton from "./loginbutton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Subscription from "../subscription";

const toggleSidebar = () => {
  const checkbox = document.getElementById("my-drawer-2");
  checkbox.checked = false;

  checkbox.checked = !checkbox.checked;
};
const Sidebar = () => {
    const { data, loading } = useContext(AuthContext);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white  text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link>
                <FaHome className="text-2xl"></FaHome>Home
              </Link>
            </li>
            <li>
              <Link>
                <MdSubscriptions className="text-2xl"></MdSubscriptions>
                Subscription
              </Link>
            </li>
            <li>
              <Link>
                <IoMdSettings className="text-2xl"></IoMdSettings>
                Settings
              </Link>
            </li>
            {!loading && !data && <Loginbutton></Loginbutton>}
            <Subscription></Subscription>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Sidebar, toggleSidebar };
