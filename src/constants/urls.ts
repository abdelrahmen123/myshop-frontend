export const BackendUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_BACKEND_URL
    : process.env.PRO_BACKEND_URL;
