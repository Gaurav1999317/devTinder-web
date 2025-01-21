import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../utils/constants";


const Chat = () => { 
    const {targetUserId}=useParams();
    const user=useSelector(store=>store.user);
    const userId=user?._id;
    const [newMessage,setNewMessage]=useState("");
    const [messages,setMessages]=useState([]);
    const fetchChat=async()=>{
      const chat=await axios.get(API_URL+"/chat/"+targetUserId,{withCredentials:true});
      console.log(chat.data.messages)
      const chatMessages=chat?.data?.messages.map(
        msg=>{
          return {firstName:msg?.senderId?.firstName,text:msg?.text}
        }
      )
      setMessages(chatMessages)

    }
    useEffect(()=>{
      fetchChat()
    },[])
    useEffect(()=>{
      if(!userId)return;
      //as soon as the page loads the socket connection is made 
      const socket=createSocketConnection();//creating socket connection
      socket.emit("joinChat",{firstName :user.firstName,userId,targetUserId});//emitting the join chat event check the network tab 
      //you need to discpnnect also as once you are done with events if you wont it is going to maintain the connection unncessarily
      socket.on("messageReceived",({firstName,text})=>{
        console.log(firstName+text);
        setMessages((messages)=>[...messages,{firstName,text}])
      })
      return ()=>{
        socket.disconnect();//whenever the components unmounts
      }
      //in the dependency array if the userId or targetuserId changes it will refresh the component
    },[userId,targetUserId]);
    const sendMessage=()=>{
      const socket=createSocketConnection()
      socket.emit("sendMessage",{
        firstName:user.firstName,
        userId,
        targetUserId,
        text:newMessage
      });
      setNewMessage("");
    }


  return (
   
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>
      <div className="flex-1 overflow-scroll p-5">{
      
     messages.map((message,index)=>{
      console.log(user.firstName +" "+message.firstName)
      return <div key={index} className={"chat"
      +
      (user.firstName==message.firstName ?
      "chat-end":"chat-start")}>
      <div className="chat-header">
        {message.firstName==user.firstName?"you":message.firstName}
        <time className="text-xs opacity-50">2 hours ago</time>
      </div>
      <div className="chat-bubble">{message.text}</div>
      <div className="chat-footer opacity-50">Seen</div>
    </div>
     })
     }


      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
          <input
           value ={newMessage} 
           onChange={(e)=>{setNewMessage(e.target.value)}}
           className="flex-1 border border-gray-500 text-black rounded p-2"></input>
          <button 
          onClick={sendMessage}
          className="btn btn-secondary">Send</button>

      </div>
      
    </div>
  )
}

export default Chat