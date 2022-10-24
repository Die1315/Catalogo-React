import axios from "axios";
import jwt_decode from "jwt-decode";

export function getPost() {
  return axios
    .get("https://three-points.herokuapp.com/api/posts", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }) //oriantada promesas debido a quee cada peticion es asincrona
    .then((response) => response.data);
}

export function getUser(token) {
  const id = jwt_decode(localStorage.getItem("token")).sub;
  return axios
    .get(`https://three-points.herokuapp.com/api/users/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }) //oriantada promesas debido a quee cada peticion es asincrona
    .then((response) => response.data);
}

export function login(username, password) {
  return axios
    .post("https://three-points.herokuapp.com/api/login", {
      username,
      password,
    }) //oriantada promesas debido a quee cada peticion es asincrona
    .then((response) => response.data);
}
