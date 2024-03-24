import { Link } from "react-router-dom";

const Loginbutton = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <Link to="login" className="btn btn-sm btn-outline btn-primary">
          Login
        </Link>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Loginbutton;
