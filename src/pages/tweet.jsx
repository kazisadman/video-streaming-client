import instance from "../utils/axiosConfig";

const Tweet = () => {
      const postTweet = (e) => {
        e.preventDefault();
        const form = e.target;

        const content = form.tweet.value;

        instance
          .post("/tweet/", {content})
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
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={postTweet}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tweet</span>
                </label>
                <textarea
                  placeholder="@Tweet"
                  name="tweet"
                  className="textarea textarea-bordered textarea-sm w-full h-40 resize-none"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Post</button>
              </div>
            </form>
          </div>
        </div>
        <div id="success-toast" className="toast hidden">
          <div className="alert alert-success">
            <span>Tweet posted successfully</span>
          </div>
        </div>
      </div>
    );
};

export default Tweet;