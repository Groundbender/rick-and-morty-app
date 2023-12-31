import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenderType, StatusType, SpeciesType } from "types";
import { resetToDefaults } from "./clear-filters-action";
interface FilterSlice {
  gender: GenderType | "";
  status: StatusType | "";
  species: SpeciesType | "";
}

const initialState: FilterSlice = {
  gender: "",
  status: "",
  species: "",
};

const filterSlice = createSlice({
  name: "@@filter",
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<GenderType>) {
      state.gender = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
    setSpecies(state, action: PayloadAction<SpeciesType>) {
      state.species = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefaults, () => {
      return filterSlice.getInitialState();
    });
  },
});

export const filtersReducer = filterSlice.reducer;

export const { setGender, setStatus, setSpecies } = filterSlice.actions;
