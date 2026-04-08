import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      // console.log("action is",action.payload);

      const requiredItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      // console.log("update data obj",requiredItem);

      if (action.payload.title) requiredItem.title = action.payload.title;
      if (action.payload.price) requiredItem.price = action.payload.price;
    },
    DeleteItem: (state, action) => {
      console.log(action.payload);
    //   for(let i=0;i<state.items.length;i++)
    //     console.log(state.items[i]);
        console.log("data is",state.items);
        
      const newData = state.items.filter((item) => item.id != action.payload);
      console.log("new data is", newData);
      state.items = newData;
    } ,
  },
});
export const { setItems, addItem, updateItem, DeleteItem } = product.actions;
export default product.reducer;
