import { AuthState } from "../reducers/auth";
import { ProfileState } from "../reducers/profile";
import { LocationState } from "../reducers/location";
import { CourtState } from "../reducers/court";

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
  location: LocationState;
  court: CourtState;
}
