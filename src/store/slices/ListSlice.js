import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ListService from 'services/ListService';
import { addNotification } from './NotificationSlice';

const initialState = {
  currentList: {},
  lists: [],
  errors: null,
  loading: false,
};
export const createList = createAsyncThunk(
  'list/createList',
  async (data, { rejectWithValue, dispatch }) => {
    const { title, callback } = data;
    try {
      const { data } = await ListService.createList(title);
      await dispatch(
        addNotification({
          type: 'success',
          message: data.message,
        })
      );
      callback();
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllUserLists = createAsyncThunk(
  'list/getAllUserLists',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      return await ListService.getAllUserLists();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateList = createAsyncThunk(
  'list/updateList',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      return await ListService.updateList(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setCurrentList(state, action) {
      const { title, id } = action.payload;
      state.currentList = {
        title,
        id,
      };
    },
  },

  extraReducers: {
    [createList.pending]: (state) => {
      console.log('list created in frontend');
    },
    [createList.fulfilled]: (state) => {
      console.log('list created in backend');
    },
    [createList.error]: (state) => {
      console.log('list created error');
    },

    [getAllUserLists.pending]: (state) => {
      state.loading = true;
      console.log('list get is pending');
    },
    [getAllUserLists.fulfilled]: (state, actions) => {
      state.loading = false;
      state.lists = actions.payload.data;
      state.currentList = {
        title: state.lists[0].title,
        id: state.lists[0]._id,
      };

      console.log('list get all');
    },
    [getAllUserLists.error]: (state) => {
      state.loading = false;
      console.log('list get error');
    },
  },
});

export const { setCurrentList } = ListSlice.actions;
export default ListSlice.reducer;
