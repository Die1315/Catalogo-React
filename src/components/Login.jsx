import React from "react";
import { login } from "../service/data-service";
import { useState } from "react";
import "./Login.css";
import image from "../img/pngfind.com-react-logo-png-6854970.png";

function Login({ onLoginComplete }) {
  const [error, setError] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        onLoginComplete(data.token);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError(err.message);
        }
      });
  }

  return (
    <div className="container container-login ">
      <div className="text-center">
        <img src={image} className="image" alt="..." />

        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              required
            />
            <label className="form-label" htmlFor="loginName">
              username
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              required
            />
            <label className="form-label">Password</label>
          </div>

          <div className="row mb-4"></div>

          <button
            type="submit"
            id="login"
            className="btn btn-primary btn-block mb-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
