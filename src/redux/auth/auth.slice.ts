import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string | null;
  // user: User | null;
  userId: number | null;
}
const initialState: IAuthState = {
  token: null,
  // user: null,
  userId: null,
};

export const commonSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setReloadPageMode(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const {} = commonSlice.actions;
export default commonSlice.reducer;
