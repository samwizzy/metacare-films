import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api = "https://swapi.dev/api/films";

export const fetchFilms = () =>
  createAsyncThunk("films/getFilms", async () => {
    return fetch(api)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err, "err");
      });
  });

export const getFilms = () => (dispatch) => {
  return fetch(api)
    .then((res) => res.json())
    .then((data) => dispatch(setFilms(data)))
    .catch((err) => {});
};

const initialState = {
  films: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
  loading: false
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload;
    }
  },
  extraReducers: {
    [getFilms.pending]: (state, action) => {
      state.loading = true;
    },
    [getFilms.fulfilled]: (state, action) => {
      state.films = action.payload;
      state.loading = false;
    },
    [getFilms.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
