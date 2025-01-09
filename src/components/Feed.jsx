import axios from "axios"
import { API_URL, feed_endpoint, } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"


const Feed = () => {
  const dispatch=useDispatch()
  const feedData=useSelector(store=>store.feed);
  
  
  const getFeed=async()=>{
    if(feedData)return 
    try{
      const res= await axios.get(API_URL+feed_endpoint,{withCredentials:true});
      console.log(res.data.data)
    dispatch(addFeed(res.data.data));
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getFeed();
  },[])
  if(!feedData)return
  if(feedData.length<=0)return<h1 className="flex justify-center my-10">No new Users Found</h1>
  return (feedData&&
    (<div className="flex justify-center my-10">
      <UserCard user={feedData[0]}/>
      </div>
      )
  )
}

export default Feed