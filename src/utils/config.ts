export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://localhost:" + process.env.PORT
    : "https:/league-servertesting.herokuapp.com/";
