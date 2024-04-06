import PropTypes from "prop-types";
// import instance from "../../utils/axiosConfig";

const Changethumbnail = ({ ChangethumbnailFunc }) => {
  const handleUpload = (e) => {
    e.preventDefault();

    const thumbnail = e.target.thumbnail.files[0];

    const data = {
      thumbnail,
    };

    ChangethumbnailFunc(data)

    // instance
    //   .patch(`/video/${_id}`, data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  };
  return (
    <>
      <h3 className="font-bold text-lg">Change Thumbnail</h3>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form className="card-body" onSubmit={handleUpload}>
          {/* if there is a button in form, it will close the modal */}
          <div className="form-control">
            <input
              name="thumbnail"
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs file-input-sm"
            />
          </div>

          <button className="btn">Upload</button>
        </form>
      </div>
    </>
  );
};

Changethumbnail.propTypes = {
  ChangethumbnailFunc: PropTypes.func,
};

export default Changethumbnail;
