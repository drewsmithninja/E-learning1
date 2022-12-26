import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import mentorAPI from "../../app/api/mentorsAPI";

export const getMentors = createAsyncThunk(
  "mentor/getMentors",
  async (data, thunkAPI) => {
    try {
      const response = await mentorAPI.getMentors(data);
      return response;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  mentors: {
    count: 3,
    message: "list fetch successfully",
    data: [
      {
        firstName: "Dharmik",
        lastName: "Shah",
        jobTitle: "Tech lead",
        userExperience: "4+",
        profilePicture: "https://randomuser.me/api/portraits/men/64.jpg",
        userId: nanoid(),
        skills: [
          { id: nanoid(), name: "AWS" },
          { id: nanoid(), name: "MERN" },
          { id: nanoid(), name: "Azure" },
          { id: nanoid(), name: "Cloud Computing" },
        ],
        price: 43,
        rating: 3,
        ratingCount: 50,
      },
      {
        firstName: "Vilas",
        lastName: "Shah",
        jobTitle: "Project Manager",
        userExperience: "6+",
        profilePicture: "https://randomuser.me/api/portraits/women/64.jpg",
        userId: nanoid(),
        skills: [
          { id: nanoid(), name: "AWS" },
          { id: nanoid(), name: "MERN" },
          { id: nanoid(), name: "Azure" },
          { id: nanoid(), name: "Cloud Computing" },
        ],
        price: 0,
        rating: 3.5,
        ratingCount: 312,
      },
      {
        firstName: "John",
        lastName: "Doe",
        jobTitle: "MERN-Stack",
        userExperience: "5+",
        profilePicture: "https://randomuser.me/api/portraits/men/30.jpg",
        userId: nanoid(),
        skills: [
          { id: nanoid(), name: "AWS" },
          { id: nanoid(), name: "MERN" },
          { id: nanoid(), name: "Azure" },
          { id: nanoid(), name: "Cloud Computing" },
        ],
        price: 40,
        rating: 4.7,
        ratingCount: 321,
      },
    ],
  },
  // currentMentor: {
  //   firstName: "Dharmik",
  //   lastName: "Shah",
  //   jobTitle: "Tech lead",
  //   userExperience: "4+",
  //   profilePicture: "https://randomuser.me/api/portraits/men/64.jpg",
  //   userId: 1,
  //   skills: [
  //     { id: 1, name: "AWS", rating: 4 },
  //     { id: 2, name: "MERN", rating: 3 },
  //     { id: 3, name: "Azure", rating: 3.2 },
  //     { id: 4, name: "Cloud Computing", rating: 4.5 },
  //   ],
  //   location: "Ahmedabad, Gujarat, India",
  //   createdAt: "",
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A faucibus nec, nec sit ut blandit non scelerisque aliquam. Pellentesque feugiat et accumsan odio duis ipsum, duis platea. Sapien ultrices amet ridiculus fermentum ullamcorper at purus netus. Ornare tortor sed donec vitae ut sed. Lacinia purus scelerisque sed molestie. In convallis id aliquam ut sed condimentum.",
  //   experience: [
  //     {
  //       id: 1,
  //       jobTitle: "Software Engineer",
  //       companyName: "NinjaTech",
  //       startDate: "startDate",
  //       endDate: "endDate",
  //       present: true,
  //     },
  //     {
  //       id: 1,
  //       jobTitle: "Software Engineer",
  //       companyName: "NinjaTech",
  //       startDate: "startDate",
  //       endDate: "endDate",
  //       present: true,
  //     },
  //   ],
  //   education: [
  //     {
  //       id: String,
  //       degreeName: String,
  //       startYear: Number,
  //       endYear: Number,
  //       firldOfStudy: String,
  //     },
  //     {
  //       id: String,
  //       degreeName: String,
  //       startYear: Number,
  //       endYear: Number,
  //       firldOfStudy: String,
  //     },
  //   ],
  //   certification: [
  //     {
  //       id: String,
  //       certificateName: String,
  //       issuingOrganization: String,
  //       issueDate: Date,
  //       expiryDate: Date,
  //     },
  //     {
  //       id: String,
  //       certificateName: String,
  //       issuingOrganization: String,
  //       issueDate: Date,
  //       expiryDate: Date,
  //     },
  //   ],
  //   languages: [
  //     { id: String, language: String },
  //     { id: String, language: String },
  //   ],
  // },
  searchQuery: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const MentorSlice = createSlice({
  name: "mentor",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      console.log(state.searchQuery, "state.searchQuery");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMentors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMentors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.mentors = action.payload;
      })
      .addCase(getMentors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.mentors = [];
      });
  },
});

export const { setSearchQuery } = MentorSlice.actions;
export default MentorSlice.reducer;
