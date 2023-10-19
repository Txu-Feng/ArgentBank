import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: "" },
    reducers: {
        setSignIn: (state, action) => {
            state.token = action.payload.token;
        },
        setSignOut: (state) => {
            state.token = null;
        },
    },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.token;
export default authSlice.reducer;