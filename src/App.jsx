
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Scroll from "./Component/scroll";
import Listbook from "./pages/listbook";
import SignUp from "./pages/sign";
import Login from "./pages/login";
import Promotion from "./pages/Promotion";
import Loginn from "./pages/login2";






function App() {
  return (
   <>
        
        <BrowserRouter>
        <Routes >
        <Route index element ={<><Navbar/><Promotion/></>}/>
        
        <Route path="/Signup" element ={<SignUp/>}></Route>
        <Route path="/Login" element ={<Login/>}></Route>
        <Route path="/Login2" element ={<Loginn/>}></Route>
        </Routes>
        </BrowserRouter>
        
        
        
        <Scroll/>
        <Listbook/>
        
        
        

   </>
      );
    }

export default App;
