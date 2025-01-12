import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Request from "./components/Request"
import Privacy from "./components/Privacy"
import TermsAndConditions from "./components/Terms"
import RefundPolicy from "./components/RefundPolicy"




function App() {
  

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="/" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/profile" element={<Profile/>}/>
        <Route path ="/connections" element={<Connections/>}/>
        <Route path ="/requests" element={<Request/>}/>
        <Route path ="/privacy" element={<Privacy/>}/>
        <Route path ="/termsandcondition" element={<TermsAndConditions/>}/>
        <Route path ="/refund" element={<RefundPolicy/>}/>
        </Route>
        </Routes>
      </BrowserRouter> 
      </Provider> 
    </>
  )
}

export default App
