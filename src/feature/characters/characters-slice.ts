import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetToDefaults } from "feature/filter/clear-filters-action";
import { Character, Extra, GenderType, SpeciesType, StatusType } from "types";
import { LoadingStatus } from "types";

export const loadCharacters = createAsyncThunk<
  Character[],
  {
    status: StatusType | "";
    gender: GenderType | "";
    species: SpeciesType | "";
  },
  { extra: Extra; rejectValue: string; state: { characters: CharacterSlice } }
>(
  "@@characters/loadCharacters",
  async (
    { status, gender, species },
    { extra: { client }, rejectWithValue, getState }
  ) => {
    const page = getState().characters.currentPage;
    try {
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

      if (status) {
        url += `&status=${status}`;
      }
      if (gender) {
        url += `&gender=${gender}`;
      }
      if (species) {
        url += `&species=${species}`;
      }

      const { data } = await client.get(url);

      return data.results as Character[];
    } catch (error) {
      return rejectWithValue("Couldn't fetch");
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        characters: { loadingStatus },
      } = getState();
      if (loadingStatus === "loading") {
        return false;
      }
    },
  }
);

type CharacterSlice = {
  loadingStatus: LoadingStatus;
  characters: Character[];
  currentPage: number;
};

const initialState: CharacterSlice = {
  loadingStatus: "idle",
  characters: [],
  currentPage: 1,
};

const charactersSlice = createSlice({
  name: "@@characters",
  initialState,
  reducers: {
    clearCharacters(state) {
      state.characters.splice(0);
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(loadCharacters.rejected, (state) => {
        state.loadingStatus = "error";
        state.currentPage = 1;
      })
      .addCase(loadCharacters.fulfilled, (state, action) => {
        state.loadingStatus = "success";

        state.characters = [...state.characters, ...action.payload];
        state.currentPage = state.currentPage + 1;
      });
  },
});

export const charactersReducer = charactersSlice.reducer;
export const { clearCharacters, setCurrentPage } = charactersSlice.actions;
