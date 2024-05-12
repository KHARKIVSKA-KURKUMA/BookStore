export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handlePending = (state) => {
  state.isLoading = true;
};
export const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const handleLogout = (state) => {
  state.user = {};
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};
