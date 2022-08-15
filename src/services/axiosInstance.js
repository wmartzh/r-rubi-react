import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER || "";
const instance = axios.create({
  baseURL,
});

export default instance;
