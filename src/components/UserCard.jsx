import axios from "axios"
import { API_URL, sendRequest } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFeed } from "../utils/feedSlice";


const UserCard = ({ user }) => {
  if(!user)return <div>No data available</div>
  const dispatch= useDispatch()
  const {_id}=user;
  
  const handleSendrequest=async(status,_id)=>{
    try{
          const res =await axios.post(API_URL+"/request/send/"+status+"/"+_id,{},{withCredentials:true});
          
          dispatch(removeUserFeed(_id));
      }catch(error){
        console.log(API_URL+sendRequest);
        console.log(error)
      }
  }
    
    
    
  return (
    <div className="card bg-base-300 w-96 shadow-2xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{user.firstName+" "+user.lastName}</h2>
      <p>{user.about}</p>
      <p>{user.age+","+user.gender}</p>
      <div className="card-actions justify-evenly my-4">
      <button className="btn btn-primary" onClick={()=>handleSendrequest("ignored",_id)}>Ignore</button>
        <button className="btn btn-secondary" onClick={()=>handleSendrequest("interested",_id)}>Interested</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard