import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slices/todoSlice";
import textReducer from "./slices/textSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    text: textReducer,
  },
});
