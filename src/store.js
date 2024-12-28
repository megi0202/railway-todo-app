import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    auth: authSlice.reducer
  }
});
=======
    auth: authSlice.reducer,
  },
});
>>>>>>> 28b21a0 (クリア済み)
