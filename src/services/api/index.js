import axios from "axios";

const instance = axios.create({
  baseURL: "https://galaxy-club-api.herokuapp.com/api/",
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
