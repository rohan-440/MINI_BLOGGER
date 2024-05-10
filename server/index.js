import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 8000;

import Database from './databases/database.js'
import bodyParser from 'body-parser';

// Enable CORS middleware
app.use(cors(
    // {
    //     // origin: 'https://mini-blogger-frontend.vercel.app'
       
    // }
));
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

import blogModel from "./model/blog.js"
app.get("/getBlog", (req, res) => {
    blogModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    blogModel.findById({ id })
        .then(users => res.json(users))
        .catch(err => res.json(err))


})

app.put("/updateBlog/:id", (req, res) => {
    const id = req.params.id;
    blogModel.findByIdAndUpdate(id, { topic: req.body.topic, description: req.body.description })
        .then(updatedBlog => {
            res.json(updatedBlog);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});


app.delete('/deleteBlog/:id', (req, res) => {
    const id = req.params.id;
    blogModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
});

import Route from './routes/route.js'

app.use('/', Route);




app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`));

