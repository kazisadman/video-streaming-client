import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import { MdSubscriptions } from "react-icons/md";
import Loginbutton from "./loginbutton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Subscription from "../subscription";
import Channelsidebar from "../channelsidebar";

const toggleSidebar = () => {
  const checkbox = document.getElementById("my-drawer-2");
  checkbox.checked = false;

  checkbox.checked = !checkbox.checked;
};
const Sidebar = () => {
    const { data, loading } = useContext(AuthContext);

  return (
    <div className="lg:pt-16">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-1 lg:px-0">
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
            {/* <li>
              <Link>
                <MdSubscriptions className="text-2xl"></MdSubscriptions>
                Subscription
              </Link>
            </li> */}
            {!loading && data.length === 0 ? (
              <Loginbutton></Loginbutton>
            ) : (
              <>
                <Channelsidebar></Channelsidebar>
                <Subscription></Subscription>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Sidebar, toggleSidebar };
