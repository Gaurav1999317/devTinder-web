import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL, profile_endpoint } from '../utils/constants';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';

const useFetchUser = () => {
    const userData=useSelector(store=>store.user)
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const fetchUser=async()=>{
      if(userData)return;
      try{
        const res=await axios.get(API_URL+profile_endpoint,
            {withCredentials:true}
        );
       
      dispatch(addUser(res));
      }catch(error)
      { if(error.status==401)
        navigate("/login")
        console.error(error);
      }
    }
    
    useEffect(()=>{
        fetchUser();
      },[])
}

export default useFetchUser