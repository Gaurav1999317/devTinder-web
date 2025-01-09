import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { API_URL, logout_endpoint } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";


const NavBar = () => {
  const user = useSelector(store=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleLogout=async()=>{
    console.log("logout called!!")
    try{
      await axios.post(API_URL+logout_endpoint,{},{withCredentials:true})
      dispatch(removeUser())
      dispatch(removeFeed());
      navigate("/login");
    }catch(err){
      console.log(err)
      //redirect to error page
    }
  }
  
  return (
    <div className="navbar bg-base-300">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">DevTinder🧑🏻‍💻</Link>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar pr-4">
          {user&&<div className="w-10 rounded-full ">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
          <Link to ="/connections">Connections</Link>
          </li>
          <li>
          <Link to ="/requests">Requests</Link>
          </li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar