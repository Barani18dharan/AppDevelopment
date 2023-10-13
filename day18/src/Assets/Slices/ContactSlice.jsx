import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editedContact: {}
};
const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    editContact: (state, action) => {
      state.editedContact = action.payload.editedContact
    }
  },
});

export const getAllContacts = (state) => state.contacts;
export const getEditedContacts = (state) => state.contact.editedContact;

export const { editContact } = ContactSlice.actions;

export default ContactSlice.reducer;