import AxiosIntance from "../../Helpers/AxiosIntance";
import { AppointmentConstants } from "../Constants";

export const AllAppointmentGet=(data)=>{
    return async(dispatch)=>{
        dispatch({type:AppointmentConstants.GET_APPOINTMENT_REQUEST});
        const res=await AxiosIntance.post('/appointment/get/all',data);
        console.log(res);

        if(res.status===200){
            dispatch({type:AppointmentConstants.GET_APPOINTMENT_SUCCESS,appointment:res.data.data});
        }
    
        if(res.status===500){
            dispatch({type:AppointmentConstants.GET_APPOINTMENT_FAILURE});
        }
    }
    }



    export const DeleteAppointment=(id)=>{
        return async(dispatch)=>{
            dispatch({type:AppointmentConstants.DELETE_APPOINTMENT_REQUEST});
            const res=await AxiosIntance.post('/appointment/delete',{id});
            console.log(res);
         
            if(res.status===200){
                dispatch({type:AppointmentConstants.DELETE_APPOINTMENT_SUCCESS});
            }
        
            if(res.status===500){
                dispatch({type:AppointmentConstants.DELETE_APPOINTMENT_FAILURE});
            }
        }
        }