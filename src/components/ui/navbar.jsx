import { useContext } from "react";
import { Sidebar, toggleSidebar } from "./sidebar";
import { AuthContext } from "../../context/AuthProvider";
import { CiSearch } from "react-icons/ci";
import Loader from "../loader";
import instance from "../../utils/axiosConfig";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { data, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const { avatar, fullName, userName } = data?.data || {};

  const toggle = () => {
    const toggleBtn = document.getElementById("sidebar-btn");

    toggleBtn.addEventListener("click", () => {
      toggleSidebar();
    });
  };

  const logOutUser = () => {
    instance
      .post("/users/logout")
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const query = e.target.search.value;
    console.log(query);
    navigate(`/search/video/${query}`);
  };
  return (
    <div>
      {loading ? (
        <Loader size={"lg"}></Loader>
      ) : (
        <div className="navbar bg-base-100 justify-between lg:fixed z-50">
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
              <a className="btn btn-ghost text-xl">streamU</a>
            </div>
          </div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <button>
              <CiSearch className="text-3xl ml-2"></CiSearch>
            </button>
          </form>
          {!loading && data.length === 0 ? (
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div className="flex items-center gap-2 ">
                <div className="hidden md:block">
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
          )}
        </div>
      )}
      <Sidebar></Sidebar>
    </div>
  );
};

export default Navbar;
