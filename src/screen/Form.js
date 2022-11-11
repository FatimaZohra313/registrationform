import { Grid, Input, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { senttodos } from "../config/firebasemethod";
import SmInput from "./component/Input";
import SMSelect from "./component/SMSelect";

export default function MyReg() {
  const [model,setModel] = useState({})
  const {txt,setTxt} = useState("")
  const[list,setList] = useState()
  const db = getDatabase();

 
  function add(){
    senttodos({...model},"users")
    // list.push(txt)
    // console.log(list);
    // setList([...list])
      }


  let fillModel = (key,val)=>{
    model[key] = val;
    setModel({...model})
    console.log(model);

  }
 
  return(
    <div>
      
    <Box className="mainForm">
    <Typography className="fw-bold" variant="h4">Registration Form</Typography>

    <Box className="d-block childForm">
        
      <Grid className="d-block" container> 
       
       <Grid item md={12}>
      
        
        <SmInput required={true}  label="First Name" onChange={(e)=>fillModel("firstName",e.target.value)} type="text" value={model.firstName} />

          
        </Grid>
       
        <Grid item md={12}>
        <SmInput label="Last Name" onChange={(e)=>fillModel("lastName",e.target.value)} type="text" value={model.lastName} />
        </Grid>
        <Grid item md={12}>
       <SMSelect 
       required={true}
       onChange={(e)=>fillModel("Course",e.target.value)}
       label="Courses" dataSource={[
        {
        id:"WD",
        fullName:"Web Development"
       },
        {
        id:"FR",
        fullName:"Flutter"
       },
        {
        id:"GD",
        fullName:"Graphic Designing"
       },
        {
        id:"WP",
        fullName:"Word Press"
       }
       ]}/>
        </Grid>
        <Grid item md={12}>
        <SmInput required={true} label="Section" onChange={(e)=>fillModel("sec",e.target.value)} type="text" value={model.section} />
        </Grid>
        <Grid item md={12}>
        <SmInput  required={true} label="Contact" onChange={(e)=>fillModel("contact",e.target.value)} type="text" value={model.contact} />
        </Grid>
        <Grid item md={12}>
        <SmInput  required={true} label="CNIC" onChange={(e)=>fillModel("cnic",e.target.value)} type="text" value={model.cnic} />
        </Grid>
        <Grid item md={12}>
        <SmInput  required={true} label="Father Name" onChange={(e)=>fillModel("fatherName",e.target.value)} type="text" value={model.fatherName} />
        </Grid>
        <Grid item md={12}>
        <SmInput label="Father Cnic" onChange={(e)=>fillModel("fatherCnic",e.target.value)} type="text" value={model.fatherCnic} />
        </Grid>
        <Grid item md={12}>
        <SmInput  required={true} label="Father Contact" onChange={(e)=>fillModel("fatherContact",e.target.value)} type="text" value={model.fatherContact} />
        </Grid>

        <Grid item md={12}>
        <SmInput  required={true} label="Emergency Contact" onChange={(e)=>fillModel("emergencyContact",e.target.value)} type="text" value={model.emergencyContact} />
        </Grid>

        <Grid item md={12}>
        <SmInput className="mt-3 px-3" onChange={(e)=>fillModel("dateOfBirth",e.target.value)} type="date" value={model.dateOfBirth} />
        </Grid>



      <button className="btn btn-secondary mt-5 px-5 rounded-pill" onClick={add}>submit</button>

          
      </Grid>
      </Box>
    </Box>


    </div>
  )
  
}