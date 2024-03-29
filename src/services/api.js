import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:33333"
});

api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? "put" : "post";
  const apiUrl = id ? `${url}/${id}` : url;
  return api[method](apiUrl, data, config);
};

export default api;
