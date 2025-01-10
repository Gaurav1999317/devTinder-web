
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { API_URL, login_endpoint, signUp } from "../utils/constants";


const Login = () => {
  const dispatch=useDispatch();
  const [error ,setError]=useState("");
  const [isLoginForm,setIsLoginForm]=useState(true)
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const [emailId,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleSignUp=async()=>{
    try{
      const res=await axios.post(API_URL+signUp,{
        firstName:firstName,
        lastName:lastName,
        email:emailId,
        password:password
      },{withCredentials:true})
      dispatch(addUser(res.data.data))
      navigate("/profile")
    }catch(error){
      setError(error?.response?.data||"Something went wrong!")
    console.error(error)
    }
  }
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
    setError(error?.response?.data||"Something went wrong!")
    console.error(error)
   }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center">{isLoginForm?"Login":"Sign Up"}</h2>
      <div >
      {!isLoginForm&&<><label className="form-control w-full max-w-xs pt-4">
      <div className="label">
        <span className="label-text">First Name</span>  
      </div>
      <input
       type="text" 
       value={firstName}
       onChange={(e)=>setFirstName(e.target.value)}
       className="input input-bordered w-full max-w-xs" /> 
      </label>
      <label className="form-control w-full max-w-xs pt-4">
      <div className="label">
        <span className="label-text">Last Name</span>  
      </div>
      <input
       type="text" 
       value={lastName}
       onChange={(e)=>setLastName(e.target.value)}
       className="input input-bordered w-full max-w-xs" /> 
      </label></>}
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
      <p className="text-red-600">{error}</p>
      <div className="card-actions justify-center">
        <button
        onClick={isLoginForm?handleLogin:handleSignUp}
        className="btn btn-primary">{isLoginForm?"Login":"Sign Up"}</button>
      </div>
      <p className="cursor-pointer mx-auto" onClick={()=>{setIsLoginForm(!isLoginForm)}}>{isLoginForm?"New User?Sign Up Here":"Existing User?Login Here"}</p>
    </div>
  </div>
  </div>
  )
}

export default Login