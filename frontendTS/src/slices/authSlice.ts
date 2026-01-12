import { createSlice } from "@reduxjs/toolkit";
export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  category: string;
  aboutYou: string;
}

const userDataString = localStorage.getItem("UserData")
  ? JSON.parse(localStorage.getItem("UserData")!)
  : null;
const initialState = {
  user:
    userDataString ??
    ({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      category: "",
      aboutYou: "",
    } as UserData),
  isLoding: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData: (
      state,
      action: {
        payload: UserData;
        type: string;
      }
    ) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoding = action.payload;
    },
  },
});

export const { setSignupData } = authSlice.actions;
export default authSlice.reducer;
