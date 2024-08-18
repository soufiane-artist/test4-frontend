import { authActions } from "../slice/authSlice";
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

export function RegisterUser (user){
    return async(dispatch)=>{
      await  axios.post(`${process.env.REACT_APP_API_URL}/register`,user)
        .then((res)=>{
            if(res.data.messageV){
               dispatch(authActions.register(true))
            }
            if(res.data.message){
                toast.error(res.data.message);
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}

export function CloseRegister (user){
    return async(dispatch)=>{
       dispatch(authActions.register(false))
    }
}


//login
export function LoginUser (user){
    return async(dispatch)=>{
        await  axios.post(`${process.env.REACT_APP_API_URL}/login`,user)
        .then((res)=>{
            if(res.data.username){
                localStorage.setItem('userInfo',JSON.stringify(res.data))
                dispatch(authActions.login(res.data))
            }
            if(res.data.message){
                toast.error(res.data.message);
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}

//get user by id
export function getUserById (userId){
    return async(dispatch)=>{
       dispatch(authActions.userAdmin(userId))
    }
}

export function Logout(){
    return async(dispatch)=>{
        localStorage.clear('userInfo')
        localStorage.clear('userAdmin')
        dispatch(authActions.userAdmin(null))
        dispatch(authActions.logout(null))
    }
}