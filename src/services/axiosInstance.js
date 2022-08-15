import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER || "";
const instance = axios.create({
  baseURL,
});

const token = localStorage.getItem("authKey");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;
