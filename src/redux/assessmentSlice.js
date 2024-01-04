// src/redux/assessmentSlice.js

import { createSlice } from "@reduxjs/toolkit";

const assessmentSlice = createSlice({
  name: "assessment",
  initialState: {
    assessments: [],
  },
  reducers: {
    addAssessment: (state, action) => {
      state.assessments.push(action.payload);
      console.log("action.payload", action.payload);
    },
  },
});

export const { addAssessment } = assessmentSlice.actions;
export const selectAssessments = (state) => state.assessment.assessments;

export default assessmentSlice.reducer;
