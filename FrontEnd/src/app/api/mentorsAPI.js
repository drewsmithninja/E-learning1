import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getMentors = async () => {
  //   const user = localStorage.getItem("user");
  //   const authorization = JSON.parse(user)?.payload?.verification?.token;
  const response = await axios.post(`${API_URL}/mentors`, {
    headers: {
      //   authorization,
    },
  });
  return response.data;
};

const studentAPI = {
  getMentors,
};

export default studentAPI;
