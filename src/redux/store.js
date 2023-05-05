import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import tweetsReducer from './tweetsSlice';
import { filtersReducer } from './filtersSlice';

// const filterPersistConfig = {
//   key: 'filter',
//   storage,
//   whitelist: ['filter'],
// };

const persistConfig = {
  key: 'tweets',
  storage: localStorage,
  whitelist: ['followings'],
};

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  filter: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore({
//   reducer: {
//     tweets: tweetsReducer,
//     filter: persistReducer(filterPersistConfig, filtersReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
