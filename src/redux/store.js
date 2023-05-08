import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tweetsReducer from './tweetsSlice';
import filtersReducer from './filtersSlice';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  filter: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
