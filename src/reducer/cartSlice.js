import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
    
     // 기존 아이템 중에 같은 상품이 있으면 수량 증가, 없으면 새로 추가해
      
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;