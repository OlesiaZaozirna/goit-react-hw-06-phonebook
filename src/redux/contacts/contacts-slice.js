import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
    { id: 1, name: 'Hermione Kline', number: '443-89-12' },
    { id: 2, name: 'Eden Clements', number: '645-17-79' },
    { id: 3, name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },

    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
