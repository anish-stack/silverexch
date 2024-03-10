// store.js

import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from './Slices/TabSlice';

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  },
});
