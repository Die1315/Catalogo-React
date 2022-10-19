import { useState } from "react";
import Moment from 'react-moment';

function Post({ image, createdAt, autor, text,comments  }) {
  /* props  props.title without {}*/
  const[likes, setLikes] = useState(0)
  
  return (
   
      <div className="card m-3 " >
        <div className="card-img-top ">
        <img src={image} className="img-top" alt="..." />
        </div>
        <div className="card-body">
          <div className="container d-flex flex-column align-item-between">
            <div className="row">
              <div className="col-6">
                <p className="card-title text-secondary"><Moment fromNow>{createdAt}</Moment></p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <span>
                  <button className="btn btn-danger" 
                  onClick={()=>{
                    setLikes(likes+1);
                  }}>
                    <i className="bi bi-heart-fill"></i>{likes}k
                  </button>
                </span>
              </div>
            </div>
            <div className="row">
              <p className="fw-bold">@{autor}</p>
            </div>

            <p className="card-text">{text}</p>
            <div className="card-footer  d-flex flex-column justify-content-end">
            <a href="" className="text-secondary">
              <i className="bi bi-chat-left"></i>
              Comments({comments})
            </a>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Post;
