import React from "react";
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className="card">
            <div className='list-group list-group-flush'>
          <Link to = "/create">  <button type="button" class="btn btn-info">Create a Post</button></Link>
                <Link to="/" className='list-group-item list-group-item-action' aria-current="page">Home</Link>
                <Link to="/movies" className='list-group-item list-group-item-action'>Movies</Link>
                <Link to="/music" className="list-group-item list-group-item-action">Music</Link>
                <Link to="/science" className="list-group-item list-group-item-action">Science</Link>
                <Link to="/technology" className="list-group-item list-group-item-action">Technology</Link>
                <Link to="/logout" className="list-group-item list-group-item-action text-danger">Log Out</Link>
            </div>
        </div>
    );
}

export default Sidebar;
