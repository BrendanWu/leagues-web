import { CourtState } from "../reducers/court";
import { Action } from "redux";

export const SET_COURT = "SET_COURT";

interface setCourt extends Action {
  type: typeof SET_COURT;
  payload: CourtState | null;
}

export type CourtActionType = setCourt;
