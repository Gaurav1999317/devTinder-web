import axios from 'axios'
import { useEffect } from 'react'
import { API_URL, getConnections } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const dispatch=useDispatch();
    const connections=useSelector(store=>store.connections);
    const fetchConnections=async()=>{
        try{
            const res = await axios.get(API_URL+getConnections,{withCredentials:true})
            dispatch(addConnections(res.data.data))
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchConnections();
    },[])
    if(!connections) return 
    if(connections.length===0)return <div>No Connection found</div>

  return (
    <div className='text-center my-10'>
        <h1 className='text-bold text-black text-4xl'>Connections</h1>
        {
            connections.map((connection)=>{
                const {firstName,lastName,age,gender,about}=connection;
                return(<div className=' flex m-4 p-4 bg-base-300 border rounded-sm w-1/2 mx-auto' key={connection._id}>
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

                    
                   
                </div>)
            })
        }
    </div>
  )
}

export default Connections