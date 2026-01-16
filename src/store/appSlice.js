import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  user: null,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const selectProducts = (state) => state.app.products;
export const selectUser = (state) => state.app.user;
export const selectLoading = (state) => state.app.loading;
export const selectError = (state) => state.app.error;

export const { setProducts, setUser, setLoading, setError } = appSlice.actions;

export default appSlice.reducer;
