
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { API_URL, login_endpoint } from "../utils/constants";


const Login = () => {
  const dispatch=useDispatch();
  const [emailId,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleLogin=async()=>{
   try{
    
    const res = await axios.post(API_URL+login_endpoint,{
     email: emailId,
    password:password,
    },
    {withCredentials:true}); 
   
    dispatch(addUser(res.data.user));
    navigate("/");

   }catch(error){
    console.dir(error)
   }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center">Login</h2>
      <div >
      <label className="form-control w-full max-w-xs pt-4">
      <div className="label">
        <span className="label-text">Email ID:{emailId}</span>  
      </div>
      <input
       type="text" 
       value={emailId}
       onChange={(e)=>setEmailId(e.target.value)}
       className="input input-bordered w-full max-w-xs" /> 
      </label>
      <label className="form-control w-full max-w-xs pb-4">
      <div className="label">
        <span className="label-text">Password</span>  
      </div>
      <input
       type="text"
       value={password} 
       onChange={(e)=>setPassword(e.target.value)}
       className="input input-bordered w-full max-w-xs" /> 
      </label>
      </div>
      <div className="card-actions justify-center">
        <button
        onClick={()=>{handleLogin()}}
        className="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login