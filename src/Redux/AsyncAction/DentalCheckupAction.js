import AxiosIntance from "../../Helpers/AxiosIntance";
import { DentalCheckupConstants } from "../Constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddDentalCheckup=(data)=>{
    return async(dispatch)=>{
        dispatch({type:DentalCheckupConstants.ADD_CHECKUP_REQUEST});
        const res=await AxiosIntance.post('/dentalcheckup/add',data);
        console.log(res);
        toast(res.data.msg);
        if(res.status===200){
            dispatch({type:DentalCheckupConstants.ADD_CHECKUP_SUCCESS});
        }
    
        if(res.status===500){
            dispatch({type:DentalCheckupConstants.ADD_CHECKUP_FAILURE});
        }
    }
    }

    
export const GetDentalCheckup=()=>{
    return async(dispatch)=>{
        dispatch({type:DentalCheckupConstants.GET_CHECKUP_REQUEST});
        const res=await AxiosIntance.post('/dentalcheckup/get');
        console.log(res);
     
        if(res.status===200){
            dispatch({type:DentalCheckupConstants.GET_CHECKUP_SUCCESS,dentalcheckup:res.data.data});
        }
    
        if(res.status===500){
            dispatch({type:DentalCheckupConstants.GET_CHECKUP_FAILURE});
        }
    }
    }


    export const DeleteDentalCheckup=(id)=>{
        return async(dispatch)=>{
            dispatch({type:DentalCheckupConstants.DELETE_CHECKUP_REQUEST});
            const res=await AxiosIntance.post('/dentalcheckup/delete',{id});
            console.log(res);
            toast(res.data.msg);
            if(res.status===200){
                dispatch({type:DentalCheckupConstants.DELETE_CHECKUP_SUCCESS});
            }
        
            if(res.status===500){
                dispatch({type:DentalCheckupConstants.DELETE_CHECKUP_FAILURE});
            }
        }
        }