import axios from "axios";

const productionUrl = "https://galaxy-club-api.herokuapp.com/api/";
const developUrl = "http://localhost:1337/api/";

const instance = axios.create({
  baseURL: productionUrl,
});

export const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export default instance;
