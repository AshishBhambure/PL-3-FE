import axios from "axios";
import { apiConnector } from "./apiConnector";

const BASE_URL = 'http://localhost:4000';

export const signUp = async (formData)=>{
    try{

       const result = await axios.post(BASE_URL+'/signUp',formData);
       console.log("result of  signup" , result);   
       return result;     

    }
    catch(e){
        console.log("Error While  signup in frontend" , e);
    }
}

export const login = async (formData,navigate)=>{
    try{
   
        const result = await apiConnector('POST',BASE_URL+'/login',formData);
        if(result.data.success){
            localStorage.setItem('token',JSON.stringify(result.data.token));
            // window.location.reload();
            window.alert("Login Done");
            navigate('/');
        }
        console.log(result.data);
        return result;
         
    }
    catch(e){
        console.log("Error While  Login" , e);
    }
}
