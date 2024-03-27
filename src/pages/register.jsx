import { Link } from "react-router-dom";
import registerImage from "../assets/undraw_tweetstorm_re_n0rs.svg";
import instance from "../utils/axiosConfig";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const fullName = e.target.fullname.value;
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const avatar = e.target.avatar.files[0];

    const data = {
      fullName,
      userName,
      email,
      password,
      avatar,
    };

    if (password.length < 6) {
      setError("Password should be ateast 6 characters");
    } else {
      instance
        .post(`/users/register`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then()
        .catch((err) => {
          if (err.response.status === 409) {
            setError("Username or email already exits");
          } else if (err.response.status === 400) {
            setError("Input field is empty!");
          }
        });
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-right">
            <p className="py-6">
              <img src={registerImage}></img>
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center mt-5 font-bold">
              Register now!
            </h1>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="John@alen"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="john_1"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Jhon@example.com"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <input
                  name="avatar"
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs file-input-sm"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>
                  Already have an account?
                  <Link to="/login" className="text-purple-600">
                    Login
                  </Link>
                </p>
                {error && <div className="text-red-500">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
