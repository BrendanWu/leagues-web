import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import location from "./location";
import court from "./court";

const rootReducer = combineReducers({
  auth,
  profile,
  location,
  court
});

export { rootReducer };
