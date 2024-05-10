import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the blog post data based on the ID
      
            
                axios.get(`https://mini-blogger-backend.vercel.app/getUser/${id}`)
                .then(res => {
                    setTopic(res.data.topic)
                    setDescription(res.data.description);
                    console.log(res)
                
    })
                .catch(err => console.log(err))
    }, []);

    const handleSubmit =  (e) => {
        e.preventDefault();
        axios.put("https://mini-blogger-backend.vercel.app/updateBlog/"+id,{topic,description})
        .then(res => {
            console.log(res)
            navigate('/home')
        })
        .catch(err => console.log(err))
          
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <input value={topic} onChange={(e) => setTopic(e.target.value)} name="topic" type="text" className="form-control" id="topic" aria-describedby="topicHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" className="form-control" id="description" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Update;
