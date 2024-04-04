import instance from "../../utils/axiosConfig";

const Avatarupdate = () => {
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const avatar = form.avatar.files[0];

    const data = {
      avatar,
    };

    instance
      .patch(`/users/update-avatar`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        const successToast = document.getElementById("success-toast");
        successToast.classList.remove("hidden");

        setTimeout(() => {
          successToast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Avatar</span>
            </label>

            <input
              type="file"
              name="avatar"
              className="file-input file-input-bordered w-full "
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
      <div id="success-toast" className="toast hidden">
        <div className="alert alert-success">
          <span>Avatar updated successfully</span>
        </div>
      </div>
    </div>
  );
};

export default Avatarupdate;
