import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"


const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route excat path = "/login" element={<Login/>}/>
        <Route excat path = "/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  )

}

export default App
