import axios from "axios";


export default {
  getLaunches: function(query) {
    return axios.get("/api/launches", { params: { q: query}});
  }
};
