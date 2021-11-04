import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import location from "./location";

const rootReducer = combineReducers({
  auth,
  profile,
  location,
});

export { rootReducer };
