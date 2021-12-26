import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    auth: false,
    isLoading: false
}

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        authSuccess: state => {
            state.auth = localStorage.getItem('TOKEN') !== null
        },
        startLoading: state => {
            state.isLoading = true;
        },
        stopLoading: state => {
            state.isLoading = false;
        },
        logout: state => {
           localStorage.removeItem('TOKEN');
           state.auth = false;
        }
    }
})

export default appReducer.reducer;
export const {startLoading, stopLoading, logout, authSuccess} = appReducer.actions;
export const appSelector = state => state.app;
export const authSelector = state => state.app.auth;

