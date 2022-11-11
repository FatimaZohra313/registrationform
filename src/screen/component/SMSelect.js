import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SMSelect(props) {
  const {label,value,onChange,dataSource,required,className,disabled,displayField,valueField} = props


  let [dtSource,setDtSource] = useState(dataSource)
 console.log(dtSource)
 

  return (
    <>
      
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          value={value}
          fullWidth
          variant= "standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={onChange}
          label={label}
          required={required}
          disabled={disabled}
          className={className}
         
          
        >
            {dtSource && dtSource.length > 0 ? dtSource.map((x)=> <MenuItem value={x[valueField?valueField:"id"]}>{x[displayField ?displayField :"fullName"]}</MenuItem>):null}
         
          
        </Select>
      
    </>
  );
}


