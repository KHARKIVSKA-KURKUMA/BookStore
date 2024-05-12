export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const isLoadingSelector = (state) => state.auth.isLoading;
export const getUserName = (state) => state.auth.user.name;
export const getUserRole = (state) => state.auth.user.role;
export const getUserEmail = (state) => state.auth.user.email;
export const getUserId = (state) => state.auth.user.id;
