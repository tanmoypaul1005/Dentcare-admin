import { combineReducers } from "redux"
import AppointmentReducers from "./AppointmentReducers";
import AuthReducers from "./AuthReducers";
import CheckupAppointmentReducers from "./CheckupAppointmentReducers";
import DentalCheckupReducers from "./DentalCheckupReducers";
import DoctorReducer from "./DoctorReducer";

const reducers=combineReducers({
    auth:AuthReducers,
    doctor:DoctorReducer,
    appointment:AppointmentReducers,
    checkup:DentalCheckupReducers,
    checkupappointment:CheckupAppointmentReducers
});

export default reducers