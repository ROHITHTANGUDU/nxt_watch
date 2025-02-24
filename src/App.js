import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Videodetails from "./Components/Videodetails";
import ProtectedRoute from "./Components/ProtectedRoute";
import { SavedVidoesProvider } from "./Context/SavedVideosContext";
import Savedvideos from "./Components/Savedvideos";


const App = ()=>{
  return(
    <SavedVidoesProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Login/>}/>
        <Route element = {<ProtectedRoute/>}>
          <Route exact path = "/home" element={<Home/>}/>
          <Route exact path = "/savedvideos" element={<Savedvideos/>}/>
          <Route exact path = "/vidoes/:id" element={<Videodetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </SavedVidoesProvider>
    
  )

}

export default App
