import { AuthConstants } from "../Constants";
const initState = {
    msg:''
}
export default (state=initState, action) => {
  switch (action.type) {
    case AuthConstants.SIGNUP_REQUEST:
      state = { ...state };
      break;

    case AuthConstants.SIGNUP_SUCCESS:
      state = { ...state };
      break;

    case AuthConstants.SIGNUP_FAILURE:
      state = { ...state };
      break;
  }
  return state;
};
