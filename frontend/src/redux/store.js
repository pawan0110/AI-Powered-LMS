import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import courseSlice from "./courseSlice.js";
import reviewSlice from "./reviewSlice.js";
import lectureSlice from "./lectureSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    course: courseSlice,
    review: reviewSlice,
    lecture: lectureSlice,
  },
});

export default store;
export { store };