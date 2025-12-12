import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice.ts";
import authSlice from "../slices/authSlice.ts"

const rootReducer = combineReducers({ 
    counter:counterSlice,
    auth :authSlice,
});

export default rootReducer;