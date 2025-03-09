import axios from "axios";


const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-e3984/us-central1/api",

  baseURL: "https://amazon-api-deploy-rd8r.onrender.com/",
});

export { axiosInstance };



