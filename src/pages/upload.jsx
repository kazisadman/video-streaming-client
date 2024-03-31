const Upload = () => {
    const uploadVideo = (e) =>{
        e.preventDefault()
        const form = e.target

        const title = form.title.value
        const description = form.description.value
        const video = form.video.files[0]
        const thumbnail = form.thumbnail.files[0]

        const data = {
            title,description,video,thumbnail
        }

        console.log(data)
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={uploadVideo}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Video Description</span>
              </label>
              <textarea
                placeholder="Description"
                name="description"
                className="textarea textarea-bordered textarea-lg w-full h-40 resize-none"
                required
              ></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Video Upload</span>
              </label>

              <input
                type="file"
                name="video"
                className="file-input file-input-bordered w-full "
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Thumbnail Upload</span>
              </label>

              <input
                type="file"
                name="thumbnail"
                className="file-input file-input-bordered w-full "
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
