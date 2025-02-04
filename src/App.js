import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Videodetails from "./Components/Videodetails";
import ProtectedRoute from "./Components/ProtectedRoute";


const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route excat path = "/" element={<Login/>}/>
        <Route element = {<ProtectedRoute/>}>
          <Route excat path = "/home" element={<Home/>}/>
          <Route excat path = ":/vidoes/{id}" element={<Videodetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )

}

export default App
