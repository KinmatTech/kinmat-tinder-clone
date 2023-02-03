import axios from "axios";

const instance = axios.create({
  // localhost
  // baseURL: "http://localhost:8001",
  // host on heroku
  baseURL: "https://tinder-backend.herokuapp.com/",
});

export default instance;
