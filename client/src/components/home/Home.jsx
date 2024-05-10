import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Sidebar from "./sidebar";

function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/getBlog");
                if (Array.isArray(res.data)) {
                    setBlogs(res.data);
                } else {
                    console.error("Invalid data format:", res.data);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    const handleDelete = (id) => {
       axios.delete("http://localhost:8000/deleteBlog/" + id)
       .then(res =>{ console.log(res)
    window.location.reload()
       }
    )
       .catch(err => console.log(err))
    };

    return (
        <div className="container mt-4">
            <Header />
            <div className="container mt-5 mb-5">
                <Banner />
            </div>
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    {blogs.map(blog => (
                        <div className="card" style={{ width: "18rem" }} key={blog.id}>
                            <div className="card-body">
                                {blog.title && <h5 className="card-title" style={{ color: "red" }}>{blog.title}</h5>}
                                <p className="card-text">{blog.description}</p>
                                <Link to={`/update/${blog._id}`} className="btn btn-primary">Update</Link>
                                <button onClick={(e) => handleDelete(blog._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Home;
