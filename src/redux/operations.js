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
  'tweets/fetchAll',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=1&limit=${limit}`);
      console.log('response.data :>> ', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const toggleFollowing = createAsyncThunk(
//   'tweets/toggleFollowing',
//   async (user, thunkAPI) => {
//     try {
//       const response = await axios.put(`/users/${user.id}`, {
//         following: !user.following,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// import axios from 'axios';

// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://64541ffee9ac46cedf37feeb.mockapi.io';

// export const fetchTweets = createAsyncThunk(
//   'tweets/fetchAll',
//   async (page, thunkAPI) => {
//     try {
//       const response = await axios.get(`/users?page=${page}&limit=3`);
//       console.log('response.data :>> ', response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addFollower = createAsyncThunk(
//   'tweets/addFollower',
//   async (user, thunkAPI) => {
//     try {
//       const response = await axios.put(`/users/${user.id}`, {
//         followers: user.followers + 1,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
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

// export const deleteFollower = createAsyncThunk(
//   'tweets/deleteFollower',
//   async (user, thunkAPI) => {
//     try {
//       const response = await axios.put(`/users/${user.id}`, {
//         followers: user.followers - 1,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
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
