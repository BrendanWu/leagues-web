import { Reducer } from "redux";
import { LocationState } from "../../interfaces/redux/reducers/location";
import { LocationActionType } from "../../interfaces/redux/actions/location";

const initialState: LocationState = {
  lat: 0,
  lng: 0,
  title: "",
};

const reducer: Reducer<LocationState, LocationActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_LOCATION": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
