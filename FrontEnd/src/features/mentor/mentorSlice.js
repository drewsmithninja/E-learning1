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
        skills: ["AWS", "MERN", "Azure", "Cloud Computing"],
        price: 43,
        rating: 3, // (Need to ask client for collection detail)
        ratingCount: 50, // (Need to ask client for collection detail)
      },
      {
        firstName: "Vilas",
        lastName: "Shah",
        jobTitle: "Project Manager",
        userExperience: "6+",
        profilePicture: "https://randomuser.me/api/portraits/women/64.jpg",
        userId: nanoid(),
        skills: ["MERN", "AWS", "Azure", "Cloud Computing"],
        price: 0,
        rating: 3.5, // (Need to ask client for collection detail)
        ratingCount: 312, // (Need to ask client for collection detail)
      },
      {
        firstName: "John",
        lastName: "Doe",
        jobTitle: "MERN-Stack",
        userExperience: "5+",
        profilePicture: "https://randomuser.me/api/portraits/men/30.jpg",
        userId: nanoid(),
        skills: ["AWS", "MERN", "Azure", "Cloud Computing"],
        price: 40,
        rating: 4.7, // (Need to ask client for collection detail)
        ratingCount: 321, // (Need to ask client for collection detail)
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
