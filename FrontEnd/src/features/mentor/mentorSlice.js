import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
// import gradeAPI from '../../api/GradeApi';

// export const fetchGrades = createAsyncThunk("grades/fetchGrades", async () => {
//   try {
//     const response = await gradeAPI.fetchGrades();
//     return response;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.message) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

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
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const MentorSlice = createSlice({
  name: "mentor",
  initialState,
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchGrades.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(fetchGrades.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.isSuccess = true;
  //         state.grades = action.payload;
  //       })
  //       .addCase(fetchGrades.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.isError = true;
  //         state.message = action.payload;
  //         state.grades = null;
  //       });
  //   },
});

// export const {} = MentorSlice.actions;
export default MentorSlice.reducer;
