import AxiosIntance from "../../Helpers/AxiosIntance";
import { CheckupAppointmentConstants } from "../Constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminAllCheckupAppointmentGet = (data) => {
  return async (dispatch) => {
    try {
      dispatch({type: CheckupAppointmentConstants.ADMIN_GET_CHECKUPAPPOINTMENT_REQUEST});
      const res = await AxiosIntance.post("/checkup/appointment/all", data);
      console.log(res);

      if (res.status === 200) {
        dispatch({type: CheckupAppointmentConstants.ADMIN_GET_CHECKUPAPPOINTMENT_SUCCESS,checkupappointment: res.data.data});
      }

      if (res.status === 500) {
        dispatch({type: CheckupAppointmentConstants.ADMIN_GET_CHECKUPAPPOINTMENT_FAILURE});
      }
    } catch (error) {
      console.log(error);
    }
  };
};



export const DeleteCheckupAppointment = (user) => {
  return async (dispatch) => {
    console.log("user",user)
    try {
      dispatch({type: CheckupAppointmentConstants.DELETE_CHECKUPAPPOINTMENT_REQUEST});
      const res = await AxiosIntance.post("/checkup/appointment/delete", {user});
      console.log(res);
      toast(res.data.msg);
      if (res.status === 200) {
        dispatch({type:CheckupAppointmentConstants.DELETE_CHECKUPAPPOINTMENT_SUCCESS});
       }

      if (res.status === 500) {
        dispatch({type: CheckupAppointmentConstants.DELETE_CHECKUPAPPOINTMENT_FAILURE});
      }
    } catch (error) {
      console.log(error);
    }
  };
};
