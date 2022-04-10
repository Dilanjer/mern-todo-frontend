import { configureStore } from '@reduxjs/toolkit';
import NotificationSlice from './slices/NotificationSlice';
import UserSlice from './slices/UserSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    notification: NotificationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
