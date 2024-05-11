import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'Example TODO', completed: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.unshift({ id: state.length + 1, title: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
        const toggledTodo = state[index];
        state.splice(index, 1);
        toggledTodo.completed ? state.push(toggledTodo) : state.unshift(toggledTodo);
      }
    }
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
