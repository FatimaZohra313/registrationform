import { TextField } from "@mui/material"

function SmInput(props){

    let {label,onChange,value,type,width,className,required,disabled} = props

    return <TextField fullWidth required={required} width={width} className={className} variant="standard" disabled={disabled} label={label} onChange={onChange} value={value} type={type}/>

}


export default SmInput;
