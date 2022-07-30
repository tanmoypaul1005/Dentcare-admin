import { combineReducers } from "redux"
import AuthReducers from "./AuthReducers";
import DoctorReducer from "./DoctorReducer";

const reducers=combineReducers({
    auth:AuthReducers,
    doctor:DoctorReducer,
});

export default reducers