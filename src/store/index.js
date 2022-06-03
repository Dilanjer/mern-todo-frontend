import { configureStore } from '@reduxjs/toolkit';
import NotificationSlice from './slices/NotificationSlice';
import UserSlice from './slices/UserSlice';
import ListSlice from './slices/ListSlice';
import TaskSlice from './slices/TaskSlice';
import ThemeSlice from './slices/ThemeSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    notification: NotificationSlice,
    list: ListSlice,
    task: TaskSlice,
    theme: ThemeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: false,
});

export default store;
