import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: [],

  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(textName, textNumber) {
        return {
          payload: {
            textName,
            textNumber,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter(el => action.payload !== el.id);
    },
  },
});

export const { addTask, deleteTask } = contactSlice.actions;
export default contactSlice.reducer;
