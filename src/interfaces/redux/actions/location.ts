import { LocationState } from "../reducers/location";
import { Action } from "redux";

export const SET_LOCATION = "SET_LOCATION";

interface setLocation extends Action {
  type: typeof SET_LOCATION;
  payload: LocationState | null;
}

export type LocationActionType = setLocation;
