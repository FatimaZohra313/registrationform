import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../config/firebasemethod";

function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    



    let logIn = (()=>{
        loginUser({email,password}).then((success) => {
         console.log(success);
         // Signed in 
         // const user = userCredential.user;
         // console.log(user);
         navigate("/form")
 
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
        <h1>Login</h1>
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
       <button onClick={logIn} className="btn btn-secondary mt-5 rounded">Login</button>

       </Box>
        </>
        </div>
    )
}


export default Login;