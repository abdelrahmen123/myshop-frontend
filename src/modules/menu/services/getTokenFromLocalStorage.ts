export const getTokenFromLocalStorage = () => localStorage.getItem("token");

export const getExpiresAtFromLocalStorage = () =>
  parseInt(localStorage.getItem("expiresAt") as string);
