import { DentalCheckupConstants } from "../Constants";

const initState = {
    doctor:'',
    dentalcheckup:'',
}
export default (state=initState, action) => {
  switch (action.type) {
    // Add dentalCheckup
    case DentalCheckupConstants.ADD_CHECKUP_REQUEST:
      state = { ...state };
      break;

    case DentalCheckupConstants.ADD_CHECKUP_SUCCESS:
      state = { ...state};
      break;

    case DentalCheckupConstants.ADD_CHECKUP_FAILURE:
      state = { ...state };
      break;


    // Get dentalCheckup
    case DentalCheckupConstants.GET_CHECKUP_REQUEST:
      state = { ...state };
      break;

    case DentalCheckupConstants.GET_CHECKUP_SUCCESS:
      state = { ...state,dentalcheckup:action.dentalcheckup};
      break;

    case DentalCheckupConstants.GET_CHECKUP_FAILURE:
      state = { ...state };
      break;



    // Delete dentalCheckup
    case DentalCheckupConstants.DELETE_CHECKUP_REQUEST:
      state = { ...state };
      break;

    case DentalCheckupConstants.DELETE_CHECKUP_SUCCESS:
      state = { ...state,dentalcheckup:action.dentalcheckup};
      break;

    case DentalCheckupConstants.DELETE_CHECKUP_FAILURE:
      state = { ...state };
      break;
  }
  return state;
};
