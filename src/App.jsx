
import Navbar from "./Component/Navbar";
import Login from "./pages/login";
import SignUp from "./pages/sign";




function App() {
  return (
   <>
      
        <Navbar/>
        {/* <Scroll/>
        <Listbook/> */}
        {<Login/>}
        <SignUp/>
        

   </>
      );
    }

export default App;
