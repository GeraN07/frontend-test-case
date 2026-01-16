import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(i => i.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        item.quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
