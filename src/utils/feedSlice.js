import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },
        removeUserFeed:(state,action)=>{
          const newFeed=state.filter(user=>user._id!=action.payload) ;
          return newFeed ;   
        },
        removeFeed:()=>{
            return null;
        }
    }
});
export default feedSlice.reducer;
export const {addFeed,removeUserFeed,removeFeed}=feedSlice.actions
