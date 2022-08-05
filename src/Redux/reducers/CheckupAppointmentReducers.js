import { CheckupAppointmentConstants } from "../Constants";

const initState = {
  checkupappointment:'',
}
export default (state=initState, action) => {
  switch (action.type) {

    case CheckupAppointmentConstants.ADMIN_GET_CHECKUPAPPOINTMENT_REQUEST:
      state = { ...state };
      break;

    case CheckupAppointmentConstants.ADMIN_GET_CHECKUPAPPOINTMENT_SUCCESS:
      state = { ...state,checkupappointment:action.checkupappointment};
      break;

    case CheckupAppointmentConstants.ADMIN_GET_CHECKUPAPPOINTMENT_FAILURE:
      state = { ...state };
      break;
  }
  return state;
};