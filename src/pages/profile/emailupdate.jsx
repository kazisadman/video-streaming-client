import { useState } from "react";
import instance from "../../utils/axiosConfig";

const Emailupdate = () => {
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;

    const data = {
      fullName,
      email,
    };

    instance
      .patch("/users/update-account", data)
      .then(() => {
        const successToast = document.getElementById("success-toast");
        successToast.classList.remove("hidden");

        setTimeout(() => {
          successToast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 500) {
          setError("Email already exits");
        }
      });
  };
  return (
    <div>
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </form>
      </div>
      <div id="success-toast" className="toast hidden">
        <div className="alert alert-success">
          <span>Account updated successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Emailupdate;
