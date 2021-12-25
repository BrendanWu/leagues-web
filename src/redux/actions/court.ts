import {
    CourtActionType,
    SET_COURT,
  } from "../../interfaces/redux/actions/court";
  import { CourtState } from "../../interfaces/redux/reducers/court";
  
  export const setCourt = (court: CourtState): CourtActionType => {
    return {
      type: SET_COURT,
      payload: court,
    };
  };
  