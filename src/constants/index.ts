const dev = "http://localhost:5000/";
const prod = "https:/league-servertesting.herokuapp.com/";
export const API = process.env.NODE_ENV === "production" ? prod : dev;
console.log(dev);
