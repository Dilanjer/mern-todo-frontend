import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  notificationsArray: [],
};

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clearNotifications(state) {
      state.notificationsArray = [];
    },
    addNotification(state, action) {
      const { type, message } = action.payload;
      state.notificationsArray.push({
        type,
        message,
        id: uuidv4(),
      });
    },
    removeNotification(state, action) {
      state.notificationsArray = state.notificationsArray.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { clearNotifications, addNotification, removeNotification } =
  NotificationSlice.actions;
export default NotificationSlice.reducer;
