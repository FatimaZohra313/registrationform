import Checkbox from '@mui/material/Checkbox';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SMSelect from './component/SMSelect';
import SMButton from './component/Button';
import { senttodos } from '../config/firebasemethod';


function AdminResult(){
   const[showResult,setShowResult] = useState(false)
   const[course,setCourse] = useState("")

   let [studentResult,setStudentResult] = useState([
    {
        Name : "Fatima",
        marks : "90",
        id : "1234",
        grade : "A"
    },
    {
        Name : "Summaiya",
        marks : "90",
        id : "1235",
        grade : "A"
    },
    {
        Name : "Alisbha",
        marks : "89",
        id : "1236",
        grade : "A"
    },
    {
        Name : "Sara",
        marks : "70",
        id : "1236",
        grade : "B"
    },
    {
        Name : "Zain",
        marks : "85",
        id : "1237",
        grade : "A"
    },
    {
        Name : "Xiom",
        marks : "75",
        id : "1238",
        grade : "B"
    },
    {
        Name : "Suneha",
        marks : "95",
        id : "1239",
        grade : "A+"
    },
    {
        Name : "Saira",
        marks : "50",
        id : "1230",
        grade : "F"
    },
    {
        Name : "Zara",
        marks : "90",
        id : "1234",
        grade : "A"
    },
    {
        Name : "Arham",
        marks : "90",
        id : "1235",
        grade : "A"
    },
    {
        Name : "Daim",
        marks : "89",
        id : "1236",
        grade : "A"
    },
    {
        Name : "Zaigum",
        marks : "70",
        id : "1236",
        grade : "B"
    },
    {
        Name : "Zaid",
        marks : "85",
        id : "1237",
        grade : "A"
    },
    {
        Name : "Shaina",
        marks : "75",
        id : "1238",
        grade : "B"
    },
    {
        Name : "Suneha",
        marks : "95",
        id : "1239",
        grade : "A+"
    },
    {
        Name : "Saira",
        marks : "50",
        id : "1230",
        grade : "F"
    },
   ]) 


   let addResult = ()=>{
    senttodos({showResult,course,studentResult},"studentResults").then((success)=>{
        console.log(success);
    }).catch((err)=>{
        console.log(err);
    })
   }

   
    return(
      <Box>
        <Grid className="results" container>
            <Grid item md={12}>
               <Checkbox onClick={()=>setShowResult(true)}/>
            </Grid>
            
            <Grid item md={12}>
               <SMSelect value={course}  dataSource={[
        {
        id:"wm",
        fullName:"Web Development"
       },
        {
        id:"fr",
        fullName:"Flutter"
       },
        {
        id:"gd",
        fullName:"Graphic Designing"
       },
       
       ]} onChange={(e)=>setCourse(e.target.value)}  />
       

            </Grid>
            <Grid item md={6}>
                <table className='tables'>
                    <tr className='bg-info p-5 text-center'>
                        <th className='p-2 m-5'>Name</th>
                        <th className='p-2 m-5'>Id</th>
                        <th className='p-2 m-5'>Section</th>
                        <th className='p-2 m-5'>Grade</th>
                    </tr>
                    {studentResult.map((x)=>{
                        return(
                            <tr className='p-5'>
                                <td className='p-2 m-5 fw-bold bg-secondary text-center text-white'>{x.Name}</td>
                                <td className='p-2 m-5 fw-bold bg-secondary text-center text-white'>{x.id}</td>
                                <td className='p-2 m-5 fw-bold bg-secondary text-center text-white'>{x.marks}</td>
                                <td className='p-2 m-5 fw-bold bg-secondary text-center text-white'>{x.grade}</td>
                            </tr>
                        )
                    })}
                       

                        
                </table>

            </Grid>
            
        </Grid>

        <SMButton className="mt-5" onClick={addResult} label="Submit Result"/>
      </Box>
    )
}

export default AdminResult;