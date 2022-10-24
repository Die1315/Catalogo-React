import "./Profile.css";
import { getUser } from "../service/data-service";
import { useEffect } from "react";
import { useState } from "react";

const initialState = [];

function Profile({ avatar, username, bio }) {
  const [dataUser, setDataUser] = useState(initialState);

  useEffect(() => {
    getUser().then((dataUser) => {
      setDataUser(dataUser);
    });
  });

  return (
    <div className="container d-flex align-item-center">
      <section className="mx-auto my-5" style={{ maxwidth: "25rem" }}>
        <div className="card profile-card mt-2 mb-3">
          <div className="card-up gradient"></div>
          <div className="avatar mx-auto">
            <img
              src={dataUser.avatar}
              className="rounded-circle img-fluid"
              alt="avatar"
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-bold">@{dataUser.username}</h4>
            <hr />
            <p>{dataUser.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
