import instance from "../../utils/axiosConfig";

const Coverupdate = () => {
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const coverImage = form.coverImage.files[0];

    const data = {
      coverImage,
    };

    instance
      .patch(`/users/update-cover`, data, {
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
                <span className="label-text">Cover Image</span>
              </label>

              <input
                type="file"
                name="coverImage"
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
            <span>Cover Image updated successfully</span>
          </div>
        </div>
      </div>
    );
};

export default Coverupdate;