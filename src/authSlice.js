import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const initialState = {
<<<<<<< HEAD
  isSignIn: cookie.get("token") !== undefined
}
=======
  isSignIn: cookie.get("token") !== undefined,
};
>>>>>>> 28b21a0 (クリア済み)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isSignIn = true;
    },
    signOut: (state) => {
      state.isSignIn = false;
    },
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 28b21a0 (クリア済み)
});

export const { signIn, signOut } = authSlice.actions;
