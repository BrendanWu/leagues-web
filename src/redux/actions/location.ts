import {
  LocationActionType,
  SET_LOCATION,
} from "../../interfaces/redux/actions/location";
import { LocationState } from "../../interfaces/redux/reducers/location";

export const setLocation = (location: LocationState): LocationActionType => {
  return {
    type: SET_LOCATION,
    payload: location,
  };
};
