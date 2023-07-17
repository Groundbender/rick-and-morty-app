import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character, Extra } from "types";
import { LoadingStatus } from "types";

export const loadCharacters = createAsyncThunk<
  Character[],
  undefined,
  { extra: Extra; rejectValue: string; state: { characters: CharacterSlice } }
>(
  "@@characters/loadCharacters",
  async (_, { extra: { client }, rejectWithValue, getState }) => {
    const page = getState().characters.currentPage;
    try {
      const { data } = await client.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );

      return data.results;
    } catch (error) {
      return rejectWithValue("Couldn't fetch");
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        characters: { status },
      } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

type CharacterSlice = {
  status: LoadingStatus;
  characters: Character[];
  currentPage: number;
};

const initialState: CharacterSlice = {
  status: "idle",
  characters: [],
  currentPage: 1,
};

const charactersSlice = createSlice({
  name: "@@characters",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCharacters.rejected, (state) => {
        state.status = "error";
        state.currentPage = 1;
      })
      .addCase(loadCharacters.fulfilled, (state, action) => {
        state.status = "success";
        state.characters = [...state.characters, ...action.payload];
        state.currentPage = state.currentPage + 1;
      });
  },
});

export const charactersReducer = charactersSlice.reducer;
