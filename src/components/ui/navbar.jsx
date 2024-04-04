import { useContext } from "react";
import { Sidebar, toggleSidebar } from "./sidebar";
import { AuthContext } from "../../context/AuthProvider";
import Loader from "../loader";
import instance from "../../utils/axiosConfig";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { data, loading } = useContext(AuthContext);

  const { avatar, fullName,userName } = data?.data || {};

  const toggle = () => {
    const toggleBtn = document.getElementById("sidebar-btn");

    toggleBtn.addEventListener("click", () => {
      toggleSidebar();
    });
  };

  const logOutUser = () => {
    instance
      .post("/users/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {loading ? (
        <Loader size={"lg"}></Loader>
      ) : (
        <div className="navbar bg-base-100 justify-between fixed z-50">
          <div>
            <button
              id="sidebar-btn"
              className="btn btn-square btn-ghost lg:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div>
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-2 ">
              <div>
                <h1>{fullName}</h1>
              </div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={avatar} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={`/${userName}/profile`} className="justify-between">
                  Update Account
                </Link>
              </li>
              <li>
                <a onClick={logOutUser}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Sidebar></Sidebar>
    </div>
  );
};

export default Navbar;
