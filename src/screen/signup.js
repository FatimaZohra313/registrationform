import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import Login from "./login";



function Signup(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    let signUp = (()=>{
       signUpUser({email,password}).then((success) => {
        console.log(success);
        // Signed in 
        // const user = userCredential.user;
        // console.log(user);
        navigate("/login")

                // ...
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);

        // ..
      });
    })
    return(
      <div className="yes">
          <>
        <h3 className="fw-bold mt-5 fs-1">Sign up</h3>
        <Box className="mt-5">
        <TextField 
        className="bg-white"
        label="Email"
        variant="filled"
        type="email"
        onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
       <Box>
       <TextField 
       className="bg-white"
        label="Password"
        variant="filled"
        type="password"
        onChange={(e)=>setPassword(e.target.value)}/>
       </Box>
       <Box>
       <button onClick={signUp} className="btn btn-secondary mt-5 rounded">Signup</button>
</Box>        
        </>
      </div>
    )
}


export default Signup;