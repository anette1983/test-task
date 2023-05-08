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
};

export const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

export const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};
