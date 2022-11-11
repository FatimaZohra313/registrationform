import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Admin from "../screen/Admin";
import MyReg from "../screen/Form";
import Login from "../screen/login";
import Result from "../screen/result";
import Signup from "../screen/signup";
// import StdList from "../screen/stdList";
import StudentProfile from "../screen/studentProfile";
// import StudentProfile from "../screen/studentProfile";
// import Todo from "../screen/todo";
// import Form from "../screen/Form";

function AppRouter() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="/" element={<Signup />} />
                    
                    <Route path="form" element={<MyReg />} />
                    <Route path="admin/*" element={<Admin />} />
                    <Route path="result" element={<Result />} />
                    <Route path="/studentprofile" element={<StudentProfile/>} />
                </Routes>
            </Router>






        </>
    )
}

export default AppRouter;