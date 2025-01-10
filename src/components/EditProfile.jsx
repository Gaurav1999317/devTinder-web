import  { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { API_URL, profileEdit_endpoint } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {
    const dispatch=useDispatch();
    const [showToast, setShowToast]=useState(false);
    
    const [firstName,setFirstName]=useState(user.firstName);
    const [lastName,setLastName]=useState(user.lastName);
    const [about,setAbout]=useState(user.about);
    const [gender,setGender]=useState(user.gender);
    const [age,setAge]=useState(user.age);
    const [error,setError]=useState();
    const saveProfile=async()=>{
        //clearing the error message if any
        setError("")
        try{
            const res=await axios.patch(API_URL+profileEdit_endpoint,
                {
                    firstName:firstName,
                    lastName:lastName,
                    gender:gender,
                    age:age,
                    about:about
                },{
                    withCredentials:true,
                });   
            dispatch(addUser(res.data.data));
            setShowToast(true);
            setTimeout(()=>{setShowToast(false)},3000)

        }catch(error){
            setError(error.message);
            console.log(error)
        }

    }

  return (
    <><div className='flex justify-center my-10 '>
         <div className="flex justify-center  ">
        <div className="card bg-base-300 w-96 mx-10  shadow-xl">
        <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <div >
        <label className="form-control w-full max-w-xs pt-4">
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
        </label>
        <label className="form-control w-full max-w-xs pt-4">
        <div className="label">
            <span className="label-text">Age</span>  
        </div>
        <input
        type="text" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        className="input input-bordered w-full max-w-xs" /> 
        </label>
        <label className="form-control w-full max-w-xs pt-4">
        <div className="label">
            <span className="label-text">Gender</span>  
        </div>
        <input
        type="text" 
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        className="input input-bordered w-full max-w-xs" /> 
        </label>
        <label className="form-control w-full max-w-xs pt-4">
        <div className="label">
            <span className="label-text">First Name</span>  
        </div>
        <input
        type="text" 
        value={about}
        onChange={(e)=>setAbout(e.target.value)}
        className="input input-bordered w-full max-w-xs" /> 
        </label>
        </div>
        <p className="text-red-600">{error}</p>
        <div className="card-actions justify-center">
            
            <button
            
            className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
        </div>
    </div>
  </div>
  
  </div>
  <div> <UserCard  user={{firstName,lastName,age,gender,about}}/></div> 
  </div>
  {showToast&&(<div className="toast toast-top toast-center ">
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>)}
  </>
  )
}

export default EditProfile