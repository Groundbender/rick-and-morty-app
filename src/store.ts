import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "feature/characters/characters-slice";
import { filtersReducer } from "feature/filter/filter-slice";
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    filters: filtersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
