import React from "react";
import {auth,provider } from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import GoogleBtn from "../Components/google button/googleBtn";

function Login(props){

    let navigate = useNavigate();
    const signInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((result)=>{

            localStorage.setItem("isAuth",true);
            // means user is logged in
            props.setIsAuth(true)
            navigate("/")
        })
    }
    return(<>
     <GoogleBtn/>
  <h1 className="login-heading">Welcome to the Blog, just sign in and start creating posts</h1>
  
  <button className="main-banner-btn" onClick={signInWithGoogle}>
    
  <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    
    Login with Google</button>
 
    </>)
}

export default Login