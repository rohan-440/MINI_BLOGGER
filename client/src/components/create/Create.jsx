import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        topic: "",
        description: ""
    });

    const inputChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }

    const base_url = "https://mini-blogger-ten.vercel.app";

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        axios.post(base_url + "/upload", blog)
            .then(response => {
                // Handle successful registration
                navigate("/home");
                console.log("Create successful:", response.data);
            })
            .catch(error => {
                // Handle registration error
                console.error("Create failed:", error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <input onChange={inputChange} name="topic" type="text" className="form-control" id="topic" aria-describedby="topicHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea onChange={inputChange} name="description" className="form-control" id="description" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Create;
