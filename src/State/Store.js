// import { applyMiddleware, createStore } from "redux";
// import { All_Reducers } from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";
import { All_Reducers } from "./Reducers";
// import { thunk } from "redux-thunk";

// export const General_store = createStore(All_Reducers,{},applyMiddleware(thunk));

const General_store = configureStore({
    reducer: All_Reducers
});

export default General_store;
