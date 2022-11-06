import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bascket: []
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItem: (state, action)=>{
      state.bascket = [...state.bascket, action.payload]
    },
    deleteItem: (state, action) => {
      state.bascket = state.bascket.filter(item=> item.id !== action.payload)
    }
  }
})

export const { addItem, deleteItem } = shopSlice.actions   // 
export default shopSlice.reducer               // 