import "./Profile.css";
function Profile({ avatar, username, bio }) {
  return (
    <div className="container d-flex align-item-center">
      <section className="mx-auto my-5" style={{ maxwidth: "25rem" }}>
        <div className="card profile-card mt-2 mb-3">
          <div className="card-up gradient"></div>
          <div className="avatar mx-auto">
            <img
              src="https://scontent.fmla4-1.fna.fbcdn.net/v/t1.6435-9/100618707_10223216259301802_5269565920300236800_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L_xjHoAEZXQAX-sl4A0&_nc_ht=scontent.fmla4-1.fna&oh=00_AT8jXQpdzBscSU8DxWBk3NTHXfk_CW8xRqT_4eO0YCQCjw&oe=63746463"
              className="rounded-circle img-fluid"
              alt="avatar"
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-bold">@Die13</h4>
            <hr />
            <p>
              please please that as low be Mind that wishes of this sort
              criticize craving to be Thank you fault pain enhanced. resultant
              customer service do it school district it is criticize from please
              for mandatory forsake fault school district escape wishes to.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
