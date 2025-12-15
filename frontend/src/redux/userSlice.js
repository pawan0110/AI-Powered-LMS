import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: JSON.parse(localStorage.getItem("userData")) || null,
    loading: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      try {
        localStorage.setItem("userData", JSON.stringify(action.payload));
      } catch (e) {
        // ignore localStorage errors
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUserData, setLoading } = userSlice.actions;
export default userSlice.reducer;
