import { Outlet,  } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import useFetchUser from "../hooks/useFetchUser";
const Body = () => {
  useFetchUser()
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body