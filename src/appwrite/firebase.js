import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADF35okufyh43sx0gm5rec4FtFx5w84Nc",
  authDomain: "first-app-d18e9.firebaseapp.com",
  projectId: "first-app-d18e9",
  storageBucket: "first-app-d18e9.appspot.com",
  messagingSenderId: "136057433396",
  appId: "1:136057433396:web:76640040badc7a3e7f8961",
  measurementId: "G-REHE2WGBZL"
};
const app = initializeApp(firebaseConfig);
 export   const auth = getAuth(app);

export const signUp=async( email, password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth, email, password)
        console.log("first",res)
        return res;

    }catch(e){
    console.error(e)
}
}
export const Login=async(username, password)=>{
    try{
        const res=await signInWithEmailAndPassword(auth,username, password)
        console.log("firstttt",res)
        return res;

    }catch(e){
    console.error(e)
}
}


// Initialize Firebase