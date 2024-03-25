import Navbar from "../components/ui/navbar";
import axios from "axios";


const Root = () => {
  axios.defaults.baseURL = "http://localhost:8000/api/v1";
  axios.defaults.withCredentials = true;
  
  const pathName = location.pathname !== "/login";
  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      {pathName && <Navbar></Navbar>}
    </div>
  );
};

export default Root;
