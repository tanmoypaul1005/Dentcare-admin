import { AppointmentConstants } from "../Constants";

const initState = {
  appointment:'',
}
export default (state=initState, action) => {
  switch (action.type) {
    case AppointmentConstants.GET_APPOINTMENT_REQUEST:
      state = { ...state };
      break;

    case AppointmentConstants.GET_APPOINTMENT_SUCCESS:
      state = { ...state,appointment:action.appointment};
      break;

    case AppointmentConstants.GET_APPOINTMENT_FAILURE:
      state = { ...state };
      break;


      //Delete
      case AppointmentConstants.DELETE_APPOINTMENT_REQUEST:
        state = { ...state };
        break;
  
      case AppointmentConstants.DELETE_APPOINTMENT_SUCCESS:
        state = { ...state};
        break;
  
      case AppointmentConstants.DELETE_APPOINTMENT_FAILURE:
        state = { ...state };
        break;
  }
  return state;
};