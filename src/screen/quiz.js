import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SMButton from "./component/Button";
import SmInput from "./component/Input";
import SMSelect from "./component/SMSelect";
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import { senttodos } from "../config/firebasemethod";
import { getDatabase, onValue, ref } from "firebase/database";


function QuizApp(){
    const [isCreateQuiz,setIsCreateQuiz] = useState(false)
    const[optionArr,setOptionArr] = useState("");
    const[optionArray,setOptionArray] = useState([]);
    const[correctAnswer,setCorrectAnswer] = useState("")
    const[myQuestion,setMyQuestion] = useState("")
    const[question,setQuestion] = useState({})
    const[questions,setQuestions] = useState([])


    const db = getDatabase();
    let [list,setList] = useState([])
    function getTodo(){
        const db = getDatabase()
        const starCountRef = ref(db, 'quiz');
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





    let fillObject = (key,val)=>{
        question[key] = val;
        setQuestion({...question})
        console.log(question);
    
      }
    


   

    function addQuestion(){

        setQuestions([...questions,{myQuestion,optionArray,correctAnswer}])
        
        console.log(questions)
        setOptionArray([]);
        setCorrectAnswer('');
        setMyQuestion("");
      
    }

    function submitQuestion(){
        senttodos({...question,questions},"quiz").then((res)=>{
            console.log(res)

        }).catch((err)=>{
            console.log(err);
        })

    }



    // let fillQuestion = (key,val)=>{
    //     question[key] = val;
        
    //     // console.log(question);
    
    //   }


    


    function addArray(){
        setOptionArray([...optionArray,optionArr]);
        setOptionArr("")
        // console.log(assisstantArray)
        // setOptionArr("");

    }


    let createQuiz = ()=>{
        setIsCreateQuiz(true)

    }
    return(
       <Box>
        <Typography className="fw-bold" variant="h4">Quiz</Typography>
        <Box>
            <Grid className="d-block container m-5 quiz p-5" container>
                <Grid item md={6}>
                    <SmInput
                    onChange={(e)=>fillObject("quizName",e.target.value)}
                    value={question.quizName}
                     disabled={isCreateQuiz} className="text-center" label="Quiz Name" type="text"/>
                </Grid>
                <Grid item md={6}>
                    <SmInput 
                     onChange={(e)=>fillObject("duration",e.target.value)}
                     value={question.duration} disabled={isCreateQuiz} label="Duration" type="Number"/>
                </Grid>
                <Grid item md={6}>

                <SMSelect 
                 onChange={(e)=>fillObject("courses",e.target.value)}
                 value={question.courses}
                
                
                disabled={isCreateQuiz}
       className="mt-3"
       required={true}
      
       label="Course" dataSource={[
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
       
       ]}/>
        </Grid>
        <Grid item md={6}>
                </Grid>
                <SMButton onClick={createQuiz} className="mt-5" label="Create Quiz"/>
      
            </Grid>
            {isCreateQuiz? 
            <Grid className="d-block container m-5 quiz p-5" container>

                <Grid item md={6}>
                    <SmInput onChange={(e)=>setMyQuestion(e.target.value)}
                    value={myQuestion} label="Question"/>

                </Grid>
                <Grid item md={4}>
                <SmInput className="mt-3" required={true}  label="Option " onChange={(e)=>setOptionArr(e.target.value)} type="text" value={optionArr} />
                {optionArray && optionArray.length > 0 ? optionArray.map((e)=>
                      <div>

                    
                      <Checkbox onClick={()=>setCorrectAnswer(e)} />
                      <p className="mt-1 fw-bold">{e}</p>  </div>):null}
                                            
                
                <SMButton className="mt-2" onClick={addArray} label={<AddIcon/>}/>
                

                </Grid>
                
                
            </Grid> : null}
           
            
           
          <SMButton onClick={addQuestion} className="m-3" label="Add Question"/>
       
        </Box>
        <SMButton onClick={submitQuestion} className=' mb-5' label="Submit Quiz"/>

        <Box>
        {list && list.length>0 ? list.map((x)=> {return <div className="records">
                        <p className="fw-bold">Quiz Name : {x.quizName}</p>
                        <p className="fw-bold">Course : {x.courses}</p>
                        <p className="fw-bold">Course Duration : {x.duration}</p>
                        {x.questions.map((e)=>{
                            return(
                                <div>
                                    <p className="fw-bold">Question : {e.myQuestion}</p>
                                    <p className="fw-bold">Correct Answer : {e.correctAnswer}</p>
                                    <p className="fw-bold">Options :  {e.optionArray.map((f,i)=><p className="fw-bold mt-1">{f}</p>)}</p>
                                </div>
                            )
                        }                        )}
                        {/* <p className="fw-bold">Lead Trainers : {x.leadtrainer}</p>
                        <p className="fw-bold">Assisstants : {x.question.map((e)=><p>{e}</p>)}</p> */}
                        
                     
                       
                       
                    </div>
        }):null}

        </Box>
       </Box>
    )
}



export default QuizApp;