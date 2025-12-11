import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice.ts";


const rootReducer = combineReducers({ 
    counter:counterSlice,

});

export default rootReducer;