import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
    let navigate = useNavigate();
    const loginVal = {
        username : "",
        password : ""
    }
    const [login,setLogin] = useState(loginVal);
    const inputChange = (e) =>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    const base_url = "http://localhost:8000";
    const loginUser = async() =>{
        try {
            const response = await axios.post(base_url+"/login", login);
            // Handle successful login
            console.log("Login successful:", response.data);
            // Redirect to dashboard or another page
           
            navigate("/home");
        } catch (error) {
            // Handle login error
            console.error("Login failed:", error);
        }

    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                '& > *': {
                    mb: 2, // adds margin bottom to all direct children
                },
                '& > :not(:last-child)': {
                    mb: 3, // adds margin bottom to all direct children except the last one
                },
            }}
        >
            <h1>Welcome to Blogger</h1>
            <TextField id="standard-basic" label="User Name" onChange={(e)=>inputChange(e)}  name = "username" variant="standard" />
            <TextField id="standard-basic" label="Password" onChange={(e)=>inputChange(e)} name = "password" variant="standard" />
            <Button variant="contained" onClick={() => loginUser()}>Log in</Button>
            <h6>OR</h6>
           <Link to = "/register"> <Button variant="outlined">Create an account</Button></Link>
        </Box>
    );
}

export default Login;
