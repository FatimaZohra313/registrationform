import { Grid } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
// import { getTodo } from "../config/firebasemethod";

function StdList(){
    let [list,setList] = useState([])
    function getTodo(){
        const db = getDatabase()
        const starCountRef = ref(db, 'users/');
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

    return(
        <div>
             <h1 className="fw-bold mt-5"> Students list </h1>
            <table className="bg-success text-white m-5">
                <thead>
                    <tr className="border ">
                        <td className="border fw-bold px-5">First Name</td>
                        <td className="border fw-bold px-5">Last Name</td>
                        <td className="border fw-bold px-5">CNIC</td>
                        <td className="border fw-bold px-5">Contact</td>
                        <td className="border fw-bold px-5">Father Name</td>
                        <td className="border fw-bold px-5">Section</td>
                        <td className="border fw-bold px-5">Course</td>
                        <td className="border fw-bold px-5">Father Contact</td>
                    </tr>
                </thead>
                <tbody>
                    {list && list.length>0 ? list.map((x)=><tr>
                        <td className="border">{x.firstName}</td>
                        <td className="border">{x.lastName}</td>
                        <td className="border">{x.cnic}</td>
                        <td className="border">{x.contact}</td>
                        <td className="border">{x.fatherName}</td>
                        <td className="border">{x.sec}</td>
                        <td className="border">{x.Course}</td>
                        <td className="border">{x.fatherContact}</td>
                    </tr>):null}
                </tbody>
            </table>
            
      
        </div>
        
      

    )
}


export default StdList;