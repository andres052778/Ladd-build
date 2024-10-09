import {combineReducers} from "@reduxjs/toolkit";
import modalReducer from "./modalReducers.tsx";




const RootReducer = combineReducers({
    modalState: modalReducer
});


export default RootReducer;