import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const initialState = {
    contacts: []
};

const contactsReducer = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, {payload}) => {
            state.contacts.push(payload.contact)
        }
    }
})

export default contactsReducer.reducer;
export const {addContact} = contactsReducer.actions;
export const contactsSelector = state => state.contacts.contacts;

export function addContactAction(value) {
    
}
