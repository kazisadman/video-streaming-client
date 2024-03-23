import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar";

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;