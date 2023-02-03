import axios from "axios";

const instance = axios.create({
  // localhost
  // baseURL: "http://localhost:8001",
  // host on Render
  baseURL: "https://tinder-backend-94e3.onrender.com",
});

export default instance;
