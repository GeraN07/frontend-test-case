import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  user: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("app/fetchProducts", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "iPhone 14",
          price: 799,
          category: "phones",
          image: "https://via.placeholder.com/200",
          description: "Новейший iPhone",
        },
        {
          id: 2,
          name: "Samsung Galaxy S23",
          price: 699,
          category: "phones",
          image: "https://via.placeholder.com/200",
          description: "Флагман Samsung",
        },
        {
          id: 3,
          name: "MacBook Pro",
          price: 1999,
          category: "laptops",
          image: "https://via.placeholder.com/200",
          description: "Мощный ноутбук Apple",
        },
      ]);
    }, 1000);
  });
});

export const fetchUser = createAsyncThunk("app/fetchUser", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Иван Иванов",
        email: "ivan@example.com",
      });
    }, 500);
  });
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки товаров";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const selectProducts = (state) => state.app.products;
export const selectUser = (state) => state.app.user;
export const selectLoading = (state) => state.app.loading;
export const selectError = (state) => state.app.error;

export const { setProducts, setUser, setLoading, setError } = appSlice.actions;

export default appSlice.reducer;
