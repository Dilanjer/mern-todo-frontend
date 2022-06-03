import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { addNotification } from './NotificationSlice';
import AuthService from 'services/AuthService';
import { API_URL } from 'http';

const initialState = {
  isAuth: false,
  currentUser: {},
  status: null,
  errors: null,
  loading: false,
};

export const registration = createAsyncThunk(
  'user/registration',
  async (data, { rejectWithValue }) => {
    const { name, email, password } = data;
    try {
      const { data } = await AuthService.registration(name, email, password);
      window.localStorage.setItem('token', data?.accessToken);
      return data?.user;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/auth/refresh-access-token`, {
        withCredentials: true,
      });
      window.localStorage.setItem('token', response?.data?.accessToken);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue, dispatch }) => {
    const { email, password } = data;
    try {
      const { data } = await AuthService.login(email, password);
      window.localStorage.setItem('token', data?.accessToken);
      return data;
    } catch (error) {
      await dispatch(
        addNotification({
          type: 'error',
          message: error.response?.data?.message,
        })
      );
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout();
      window.localStorage.removeItem('token');
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus(state, action) {
      state.status = action;
    },
    resetError(state) {
      state.errors = null;
    },
    setAuth(state, action) {
      state.isAuth = action;
    },
    setUser(state, action) {
      state.currentUser = action;
    },
  },

  extraReducers: {
    // registration
    [registration.pending]: (state) => {
      state.status = 'pending';
      state.errors = null;
      state.loading = true;
      console.log('registration pending');
    },
    [registration.fulfilled]: (state, action) => {
      state.status = 'success';
      state.loading = false;
      console.log('registration success', action);
    },
    [registration.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      console.log('registration error', action);
    },

    // login
    [login.pending]: (state) => {
      state.status = 'pending';
      state.errors = null;
      state.loading = true;
      console.log('login pending');
    },
    [login.fulfilled]: (state, action) => {
      console.log('login success', action);
      state.status = 'success';
      state.isAuth = true;
      state.loading = false;
      state.currentUser = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      console.log('login errors', action);
    },

    // logout
    [logout.pending]: (state) => {
      state.status = 'pending';
      state.errors = null;
      state.loading = true;
      console.log('logout pending');
    },
    [logout.fulfilled]: (state, action) => {
      console.log('logout success', action);
      state.status = '';
      state.isAuth = false;
      state.loading = false;
      state.currentUser = {};
    },
    [logout.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
      console.log('logout errors', action);
    },

    // chackAuth
    [checkAuth.pending]: (state) => {
      state.status = 'pending';
      state.errors = null;
      state.loading = true;
      console.log('checkAuth pending');
    },
    [checkAuth.fulfilled]: (state, action) => {
      console.log('checkAuth success', action);
      state.status = 'success';
      state.isAuth = true;
      state.loading = false;
      state.currentUser = action.payload.data.user;
    },
    [checkAuth.rejected]: (state, action) => {
      console.log('checkAuth errors', action?.payload);
      state.errors = action?.payload?.data;
      state.loading = false;
      if (action?.payload?.status === 401) {
        window.localStorage.removeItem('token');
      }
    },
  },
});

export const { resetStatus, resetError, userAuth } = UserSlice.actions;
export default UserSlice.reducer;
