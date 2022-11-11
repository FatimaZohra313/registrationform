import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import SMSelect from "./component/SMSelect";

function Result(){

    let[allResult,setAllResult] = useState([])


    function getData(){
        const db = getDatabase()
        const starCountRef = ref(db, 'studentResults/');
       onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        // console.log(data)
        let res = [...Object.values(data)]
        let arr = res.filter((x)=>x.showResult)
        setAllResult([...arr])

        

       
        
        // setKey([...Object.keys(data)])
    
    })}

    useEffect(()=>{
        getData();
        },[])
        console.log(allResult)

        return(
        <Box>
            <Typography variant="h3">Students Result</Typography>
            
        {
            allResult && allResult.length>0 ? <SMSelect className="fw-bold" valueField="course" displayField="course" label="Course" dataSource={allResult}/>
        :''}
                 
                
            
        </Box>
    )
}

export default Result;