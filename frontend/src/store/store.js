import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import reducer dari authSlice

const store = configureStore({
  reducer: {
    auth: authReducer, // Tambahkan authReducer ke store
  },
});

export default store;
