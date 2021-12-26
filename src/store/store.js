import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import app from "./../store/app";
import contacts from "./contacts"

const rootReducer = combineReducers({
    app,
    contacts
})

const store = configureStore({reducer: rootReducer});

export default store;