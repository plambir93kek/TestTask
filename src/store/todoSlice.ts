import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ToDo {
    id: string;
    text: string
}

export const todosAdapter = createEntityAdapter<ToDo>({
    selectId: (todo) => todo.id,
});
export const todoSelectors = todosAdapter.getSelectors<RootState>((state) => state.todos);

export const todoSlice = createSlice({
    name: 'todos',
    initialState: todosAdapter.getInitialState(),
    reducers:{
        addTodo: todosAdapter.addOne,
        updateTodo: todosAdapter.updateOne,
        removeTodo: todosAdapter.removeOne,
    }
});

export default todoSlice.reducer;
export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;