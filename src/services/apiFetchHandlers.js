// import { toast } from 'react-toastify';

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  // state.unfollowed = action.payload;
};

export const handleToggleFullfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
  // state.unfollowed.splice(index, 1, action.payload);
  // state.followings.push(action.payload);
};

// // import { toast } from 'react-toastify';

// export const handlePending = state => {
//   state.isLoading = true;
// };

// export const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const handleFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
//   state.unfollowed = action.payload;

//   console.log('action.payload :>> ', action.payload);
// };

export const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
  // index.followers = action.payload.followers;
};

export const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  
  state.items.splice(index, 1, action.payload);
  console.log('index :>> ', index);
  // index.followers = action.payload.followers;
};

// state.items = [...state.items, ...action.payload];
// state.unfollowed = [...state.unfollowed, ...action.payload];
// state.items = state.items.concat(action.payload);
// state.unfollowed = state.unfollowed.concat(action.payload);
// state.items.push(action.payload);
// state.unfollowed.push(action.payload);
// state.items = state.items.concat(action.payload);
// state.unfollowed = state.unfollowed.concat(action.payload);
// state.items.push(action.payload);
// state.unfollowed.push(action.payload);
// state.items.concat(action.payload);
// state.unfollowed.concat(action.payload);
// state.items = [...state.items, action.payload];
// state.unfollowed = [...state.unfollowed, action.payload];
