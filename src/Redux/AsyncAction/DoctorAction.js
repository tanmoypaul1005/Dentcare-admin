import AxiosIntance from "../../Helpers/AxiosIntance";
import { DoctorConstants } from "../Constants"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddDoctor=(data)=>{
return async(dispatch)=>{
    dispatch({type:DoctorConstants.ADD_DOCTOR_REQUEST});
    const res=await AxiosIntance.post('/doctor/add',data);
    console.log(res);
    toast(res.data.msg);
    if(res.status===200){
        dispatch({type:DoctorConstants.ADD_DOCTOR_SUCCESS});
    }

    if(res.status===500){
        dispatch({type:DoctorConstants.ADD_DOCTOR_FAILURE});
    }
}
}


export const GetDoctor=()=>{
    return async(dispatch)=>{
        dispatch({type:DoctorConstants.GET_DOCTOR_REQUEST});
        const res=await AxiosIntance.post('/doctor/get');
        console.log(res);
       
        if(res.status===200){
            dispatch({type:DoctorConstants.GET_DOCTOR_SUCCESS,doctor:res.data.data});
        }

        if(res.status===500){
            dispatch({type:DoctorConstants.GET_DOCTOR_FAILURE});
        }
    }
    }