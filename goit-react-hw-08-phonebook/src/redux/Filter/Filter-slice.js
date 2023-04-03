import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilterValue(_, action) {
            return action.payload;
          },

        // setFilterValue: (_, { payload }) => 
        // payload
    },
});

export const filterReducer = filterSlice.reducer;
  export const { setFilterValue } = filterSlice.actions;
//export const {setFilter} = filterSlice.actions;

