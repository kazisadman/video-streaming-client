import PropTypes from "prop-types";
import instance from "../../utils/axiosConfig";
import Changethumbnail from "./changethumbnail";
import { Link } from "react-router-dom";

const Videotable = ({ videoData }) => {
  const { thumbnail, title, views, _id, isPublished } = videoData;

  const togglePublishVideo = () => {
    instance
      .patch(`/video/toggle/publish/${_id}`)
      .then(() => {
        const successToast = document.getElementById("success-toast");
        successToast.classList.remove("hidden");

        setTimeout(() => {
          successToast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => console.error(err));
  };

  const openThumbnailModal = (id) => {
    const modal = document.getElementById("my_modal_5");
    modal.dataset.videoId = id;
    modal.showModal();
  };

  const openDeleteModal = (id) => {
    const modal = document.getElementById("my_modal_3");
    modal.dataset.videoId = id;
    modal.showModal();
  };

  const deleteVideo = () => {
    const videoId = document.getElementById("my_modal_3").dataset.videoId;
    instance
      .delete(`/video/${videoId}`)
      .then(() => {
        const successToast = document.getElementById("success-toast");
        successToast.classList.remove("hidden");

        setTimeout(() => {
          successToast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  const changeThumbnail = (data) => {
    const videoId = document.getElementById("my_modal_5").dataset.videoId;
    instance
      .patch(`/video/${videoId}`, data, {
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
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <Link to={`/play/${_id}`}>
          <td className="font-bold">
            {title}
            <br />
            <span className="badge badge-ghost badge-sm">{views} views</span>
          </td>
        </Link>
        <th>
          {!isPublished ? (
            <button className="btn btn-sm" onClick={togglePublishVideo}>
              Publish
            </button>
          ) : (
            <button className="btn btn-sm" onClick={togglePublishVideo}>
              Unpublish
            </button>
          )}
        </th>
        <th>
          <button
            className="btn btn-neutral btn-sm"
            onClick={() => openThumbnailModal(_id)}
          >
            Change
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <Changethumbnail
                ChangethumbnailFunc={changeThumbnail}
              ></Changethumbnail>
            </div>
          </dialog>
        </th>
        <th>
          <button
            className="btn btn-error btn-sm"
            onClick={() => openDeleteModal(_id)}
          >
            Delete
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <p className="py-4">Do you want to delete the video? </p>
              <button
                className="btn btn-error"
                onClick={() => deleteVideo(_id)}
              >
                Delete
              </button>
            </div>
          </dialog>
        </th>
      </tr>
      <div id="success-toast" className="toast hidden">
        <div className="alert alert-success">
          <span>Video settings updated</span>
        </div>
      </div>
    </>
  );
};

Videotable.propTypes = {
  videoData: PropTypes.object,
};

export default Videotable;
