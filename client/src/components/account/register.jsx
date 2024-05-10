import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Register() {
    const registerValue = {
        name : "",
        username : "",
        password : ""
    }

    let navigate = useNavigate();

    const [registerdetails,setregisterdetails] = useState(registerValue);

    const onInputChange = (e) =>{
        setregisterdetails({...registerdetails,[e.target.name] : e.target.value});
    }
    const base_url = "https://mini-blogger-backend.vercel.app";
const registerUser = () => {
    axios.post(base_url + "/register", registerdetails)
            .then(response => {
                // Handle successful registration
                console.log("Registration successful:", response.data);
                navigate("/home");
            })
            .catch(error => {
                // Handle registration error
                console.error("Registration failed:", error);
            });
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
            <TextField id="standard-basic" label="Name" onChange = {(e) => onInputChange(e)} name = "name" variant="standard" />
            <TextField id="standard-basic" label="User name" onChange = {(e) => onInputChange(e)} name = "username" variant="standard" />
            <TextField id="standard-basic" label="Password" onChange = {(e) => onInputChange(e)} name = "password"variant="standard" />
            <Button variant="contained" onClick = {()=> registerUser() } >Register</Button>
            <h6>OR</h6>
           <Link to = "/"> <Button variant="outlined">Log in</Button></Link>
        </Box>
    );
}

export default Register;
