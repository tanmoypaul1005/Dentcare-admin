import { DoctorConstants } from "../Constants";

const initState = {
    doctor:''
}
export default (state=initState, action) => {
  switch (action.type) {
    // Add Doctor
    case DoctorConstants.ADD_DOCTOR_REQUEST:
      state = { ...state };
      break;

    case DoctorConstants.ADD_DOCTOR_SUCCESS:
      state = { ...state};
      break;

    case DoctorConstants.ADD_DOCTOR_FAILURE:
      state = { ...state };
      break;


      //Get Doctor
      case DoctorConstants.GET_DOCTOR_REQUEST:
        state = { ...state };
        break;
  
      case DoctorConstants.GET_DOCTOR_SUCCESS:
        state = { ...state,doctor:action.doctor};
        break;
  
      case DoctorConstants.GET_DOCTOR_FAILURE:
        state = { ...state };
        break;
  }
  return state;
};