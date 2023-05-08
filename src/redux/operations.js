import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64541ffee9ac46cedf37feeb.mockapi.io';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTweetsByPage = createAsyncThunk(
  'tweets/fetchPages',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=1&limit=${limit}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFollower = createAsyncThunk(
  'tweets/addFollower',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        ...user,
        followers: user.followers + 1,
        following: !user.following,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFollower = createAsyncThunk(
  'tweets/deleteFollower',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        ...user,
        followers: user.followers - 1,
        following: !user.following,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
