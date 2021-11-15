import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoSlice from "./todoSlice";


export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
