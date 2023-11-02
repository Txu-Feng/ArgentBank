import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        firstName: null,
        lastName: null,
        userName: null,
    },
    reducers: {
        getUserData: (state, action) => {
            state.email = action.payload.data.body.email;
            state.firstName = action.payload.data.body.firstName;
            state.lastName = action.payload.data.body.lastName;
            state.userName = action.payload.data.body.userName;
        },
        editUserName: (state, action) => {
            state.userName = action.payload
        },
        resetData: (state) => {
            for (const i in state) {
                state[i] = null;
            }
        },
    },
})

export const { getUserData, editUserName, resetData } = userSlice.actions;
export const selectUserData = (state) => state.user;
export default userSlice.reducer;