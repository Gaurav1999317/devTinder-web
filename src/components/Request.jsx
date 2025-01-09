import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL, getRequests, requestReview } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'

const Request = () => {
    const dispatch=useDispatch();
    const requests=useSelector(store=>store.requests);
    
    const reviewRequest=async(status,_id)=>{
        
        try{
          const res=axios.post(API_URL+requestReview+status+"/"+_id,{},{withCredentials:true}) ;
          dispatch(removeRequest(_id));//remove the request once accepted or rejected
        }catch(error){
            console.log(error)
        }
    }
    const fetchRequest=async()=>{
        if(requests)return
        try{
            const res=await axios.get(API_URL+getRequests,{withCredentials:true});
            dispatch(addRequests(res.data.data));
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchRequest();
    },[])
    if(!requests) return 
    if(requests.length===0)return <h1 className='flex justify-center my-10'>No Request found</h1>

  return (
    <div className='text-center my-10'>
        <h1 className='text-bold text-black text-4xl'>Request</h1>
        {
            requests.map((request)=>{
                const {firstName,lastName,age,gender,about}=request.fromUserId;
                return(
                <div 
                className=' flex justify-between items-center m-4 p-4 bg-base-300 border rounded-sm w-2/3 mx-auto' key={request._id}>
                    <div className=''>
                        <img
                         alt ="img" 
                         className='w-20 h-20 rounded-full' 
                         src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"/>        
                    </div>
                    <div className='text-left mx-4'> 
                        <h2 className='font-bold text-xl'>{firstName+" "+lastName}</h2>
                        {age&&gender&&<p>{age+", "+gender}</p>}
                        <p>{about}</p>
                    </div> 
                   
                    
                    <div>
                        <button className="btn btn-primary mx-2 " onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
                        <button className="btn btn-secondary mx-2" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
                    </div>  
                </div>)
            })
        }
    </div>
  )
}

export default Request