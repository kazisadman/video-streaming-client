import Navbar from "../components/ui/navbar";

const Root = () => {
  const pathName = location.pathname !== "/login";
  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      {pathName && <Navbar></Navbar>}
    </div>
  );
};

export default Root;
