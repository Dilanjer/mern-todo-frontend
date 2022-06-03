import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TaskService from 'services/TaskService';

const initialState = {
  tasks: [],
};

export const createTask = createAsyncThunk(
  'list/createTask',
  async (data, { rejectWithValue, dispatch }) => {
    const { title, listId } = data;
    try {
      return await TaskService.createTask(title, listId);
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllUserTaskByListId = createAsyncThunk(
  'list/getAllUserTasks',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      return await TaskService.getAllUserTaskByListId(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: {
    [createTask.pending]: (state) => {
      console.log('Task created in frontend');
    },
    [createTask.fulfilled]: (state) => {
      console.log('Task created in backend');
    },
    [createTask.error]: (state) => {
      console.log('Task created error');
    },

    [getAllUserTaskByListId.pending]: (state) => {},
    [getAllUserTaskByListId.fulfilled]: (state, actions) => {
      state.tasks = actions.payload.data;
    },
    [getAllUserTaskByListId.error]: (state) => {},
  },
});

export default TaskSlice.reducer;
