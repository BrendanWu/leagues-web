import { Reducer } from "redux";
import { CourtState } from "../../interfaces/redux/reducers/court";
import { CourtActionType } from "../../interfaces/redux/actions/court";

const initialState: CourtState = {
  title: "",
  description: "",
  timing: "",
  website: "",
  imageUrl: ""
};

const reducer: Reducer<CourtState, CourtActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_COURT": {
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
