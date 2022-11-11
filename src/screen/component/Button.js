import { Button } from "@mui/material";
import React from "react";

function SMButton(props) {

    let {onClick,variant,label,disabled,className} = props
    return(
        <>
        <Button
        onClick={onClick}
        variant={variant ?? "contained"}
        disabled={disabled}
        className={className}
        
        >{label}</Button>
        </>
    )

   
}
export default SMButton;