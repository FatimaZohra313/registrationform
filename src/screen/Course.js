import { Box, Grid, Typography } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { senttodos } from "../config/firebasemethod";
import SmInput from "./component/Input";
import SMSelect from "./component/SMSelect";

function CourseName(){
    const [course,setCourse] = useState({})
    const[assisstanttrainee,setAssisstantTrainee] = useState("");
    const[assisstantArray,setAssisstantArray] = useState([]);


    let arr = [1,2,3,4,5]

    const db = getDatabase();
    let [list,setList] = useState([])
    function getTodo(){
        const db = getDatabase()
        const starCountRef = ref(db, 'courses');
       onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        // console.log(data)
        setList([...Object.values(data)])
        console.log(list);

       
        
        // setKey([...Object.keys(data)])
    
    });
    
    
    
      }
    
    
    useEffect(()=>{
    getTodo();
    },[])

    function addArray(){
        setAssisstantArray([...assisstantArray,assisstanttrainee]);
        setAssisstantTrainee("");

    }

 
    function add(){
      senttodos({...course,assisstantArray : assisstantArray},"courses")
      // list.push(txt)
      console.log(list);
      // setList([...list])
        }
    let fillCourse = (key,val)=>{
        course[key] = val;
        setCourse({...course})
        console.log(course);
    
      }
    return(
        <div>
            <Box className="mainForm container">
            <Typography className="fw-bold" variant="h4">Add new Course</Typography>
            <Box className="d-block childForm">
                <Grid className="d-block" container>
                <Grid item md={4}>
                <SmInput  className="mt-3" required={true}  label="Course Name" onChange={(e)=>fillCourse("courseName",e.target.value)} type="text" value={course.courseName} />
                </Grid>
 
        <Grid item md={4}>
                <SmInput className="mt-3" required={true}  label="Lead Trainer id" onChange={(e)=>fillCourse("leadtrainer",e.target.value)} type="text" value={course.leadTrainer} />
                </Grid>
                    
        <Grid item md={4}>
                <SmInput className="mt-3" required={true}  label="Assisstant Trainee" onChange={(e)=>setAssisstantTrainee(e.target.value)} type="text" value={assisstanttrainee} />
                {assisstantArray && assisstantArray.length > 0 ? assisstantArray.map((e)=><p>{e}</p>):null}
                </Grid>
                <button onClick={addArray}>Add</button>
                <Grid item md={4}>
       <SMSelect 
       className="mt-3"
       required={true}
       onChange={(e)=>fillCourse("Course",e.target.value)}
       label="Courses" dataSource={[
        {
        id:"3-4 months",
        fullName:"3-4 months"
       },
        {
        id:"5-6 months",
        fullName:"5-6 months"
       },
        {
        id:"5-6 months",
        fullName:"6-8 months"
       },
        {
        id:"8-10 months",
        fullName:"8-10 months"
       },
        {
        id:"10-12 months",
        fullName:"10-12 months"
       }
       ]}/>
        </Grid>
        <Grid item md={4}>
       <SMSelect 
       className="mt-3"
       required={true}
       onChange={(e)=>fillCourse("quiz",e.target.value)}
       label="No of Quiz" dataSource={[
        {
        id:"1",
        fullName:"1"
       },
        {
        id:"2",
        fullName:"2"
       },
        {
        id:"3",
        fullName:"3"
       },
        {
        id:"4",
        fullName:"4"
       },
        {
        id:"5",
        fullName:"5"
       }
       ]}/>
        </Grid>

                <button onClick={add} className="btn btn-secondary px-4">Add</button>
                    
                </Grid>
            </Box>
            </Box>
            
            
                    {list && list.length>0 ? list.map((x)=> {return <div className="records">
                        <p className="fw-bold">Course Name : {x.courseName}</p>
                        <p className="fw-bold">No of Quiz : {x.quiz}</p>
                        <p className="fw-bold">Course Duration : {x.Course}</p>
                        <p className="fw-bold">Lead Trainers : {x.leadtrainer}</p>
                        <p className="fw-bold">Assisstants : {x.assisstantArray.map((e)=><p>{e}</p>)}</p>
                        
                     
                       
                       
                    </div>
        }):null}

        
                
            
        </div>
    )
}
export default CourseName;