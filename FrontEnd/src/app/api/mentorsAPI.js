import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const getMentors = async (data) => {
  const response = await axios.post(`${API_URL}user/new-user/mentorList`, data);
  console.log(response.data, "res.data");
  return response.data;
};

const getMentorDetails = async (id) => {
  const response = await axios.post(
    `${API_URL}user/new-user/mentorDetails`,
    id
  );
  console.log(response.data);
  return response.data;
};

const mentorAPI = {
  getMentors,
  getMentorDetails,
};

export default mentorAPI;
