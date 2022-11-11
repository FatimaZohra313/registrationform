import { Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import StdList from "../stdList";
import CourseName from "../Course";
import QuizApp from "../quiz";
import AdminResult from "../adminresult";

function AdminDrawer(){
    let [isDrawerOpen,setIsDrawerOpen] = useState(false)
    return(
        <>
        <h1 className="fw-bold">Admin Panel</h1>
         <Box>
            <IconButton position="fixed" size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
                    <MenuIcon />
                    
                </IconButton>
            <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={()=>setIsDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign='center' role="presentation">
                    <Typography className="fw-bold mb-5" variant="h4">Admin Panel</Typography>
                   <ul>
                    <li>
                    <Typography variant="h5"><Link className="child mt-5" to="stdlist">Students list</Link></Typography>
                    </li>
                    <li>
                    <Typography variant="h5"><Link className="child mt-5" to="courses">Courses</Link></Typography>
                   
                    </li>
                    <li> <Typography variant="h5"><Link className="child mt-5" to="quiz">Quiz App</Link></Typography></li>
                    <li> <Typography variant="h5"><Link className="child mt-5" to="adminresult">Std Result</Link></Typography></li>
                   </ul>
                </Box>
                
            </Drawer>
            <Routes>
                <Route path="stdlist" element={<StdList/>}/>
                <Route path="courses" element={<CourseName/>}/>
                <Route path="quiz" element={<QuizApp/>}/>
                <Route path="adminResult" element={<AdminResult/>}/>
            </Routes>

    
        </Box></>
       
    )
}


export default AdminDrawer;