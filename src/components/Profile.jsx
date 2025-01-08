import { useSelector } from "react-redux"
import EditProfile from "./EditProfile";
import useFetchUser from "../hooks/useFetchUser";


const Profile = () => {
  useFetchUser();
  const user=useSelector(store=>store.user);
  if(!user)return <div>no user available</div>
  return(user&& (
    <div>
      <EditProfile user={user}/>
      </div>
  ))
}

export default Profile