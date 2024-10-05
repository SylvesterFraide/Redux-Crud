import { createSlice } from "@reduxjs/toolkit"
import { UsersData } from "./Data"

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: UsersData},
    reducers: {
        addUser: (state, action) => {
          state.value.push(action.payload)
        },

        deleteUser: (state, action) => {
          state.value = state.value.filter((user) => user.id !== action.payload.id);
        },

        updateUser: (state, action) => {
          state.value.map((users) => {
            if (users.id === action.payload.id) {
              users.username = action.payload.username;
            } 
          })
        },
    }
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;