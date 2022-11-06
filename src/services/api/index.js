import axios from "axios";

const instance = axios.create({
  baseURL: "https://galaxy-club-api.herokuapp.com/api/",
});

export default instance;
