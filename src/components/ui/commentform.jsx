import PropTypes from "prop-types";
import instance from "../../utils/axiosConfig";

const Commentform = ({ videoId }) => {
  const postComment = (e) => {
    e.preventDefault();
    const form = e.target;

    const content = form.comment.value;

    instance
      .post(`/comment/${videoId}`, { content })
      .then(() => {
        const successToast = document.getElementById("success-toast");
        successToast.classList.remove("hidden");

        setTimeout(() => {
          successToast.classList.add("hidden");
        }, 3000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="my-3">
      <form onSubmit={postComment}>
        <div>
          <textarea
            className="textarea textarea-bordered w-full h-7 resize-none"
            placeholder="Add a comment"
            name="comment"
            required
          ></textarea>
        </div>
        <div className=" flex justify-end">
          <button className="btn btn-primary">Comment</button>
        </div>
      </form>
      <div id="success-toast" className="toast hidden">
        <div className="alert alert-success">
          <span>Comment posted successfully</span>
        </div>
      </div>
    </div>
  );
};

Commentform.propTypes = {
  videoId: PropTypes.string,
};

export default Commentform;
