function Post({ img, time, user, description, likes,comments  }) {
  /* props  props.title without {}*/

  return (
   
      <div className="card m-3 " style={{ width: "20rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p className="card-title text-secondary">{time}</p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <span>
                  <button className="btn btn-danger">
                    <i className="bi bi-heart-fill"></i>{likes}k
                  </button>
                </span>
              </div>
            </div>
            <div className="row">
              <p className="fw-bold">{user}</p>
            </div>

            <p className="card-text">{description}</p>
            <a href="#" class="">
              <i className="bi bi-chat-left"></i>
              Comments({comments})
            </a>
          </div>
        </div>
      </div>
   
  );
}

export default Post;
