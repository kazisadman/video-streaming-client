import axios from "axios";

const instance = axios.create();

// instance.defaults.baseURL = "http://localhost:8000/api/v1";
instance.defaults.baseURL = "https://video-streaming-qljk.onrender.com/api/v1";
instance.defaults.withCredentials = true;

export default instance;
