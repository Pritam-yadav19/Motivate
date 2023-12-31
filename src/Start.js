import React, { useState } from "react";
import "./css/Start.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const Homepage = ()=>{
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('mongodb://localhost:27017/', {Name, Email, Password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    return(
        <div className="flex items-center justify-center">
            <div>
                <p className="text-center">WELCOME! </p>
                <div className="mt-4">
                    <form className="text-center">
                        <div className="flex align-items-center justify-between mb-1">    {/**justify betw is for spacing both input tag and p tag vertically!!! */}
                            <p className="mr-2">Full Name:</p>
                            <input type="text" onChange={(e)=>setName(e.target.value)} className="border-2 border-black-100 rounded px-2 py-1" placeholder="type your name"/>
                        </div>
                        <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Email-Id:</p>
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} className="border-2 border-black-100 rounded px-2 py-1" placeholder="type your email"/>
                        </div>
                        {/* <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Gender:</p>
                            <p className="">Male:</p>
                            <input type="checkbox"/>
                            <p>Female:</p>
                            <input type="checkbox"/>
                        </div> */}
                        <div className="flex align-items-center justify-between mb-1">
                            <p className="mr-2">Password:</p>
                            <input type="text" onChange={(e)=>setPassword(e.target.value)} className="border-2 border-black-100 rounded px-2 py-1" placeholder="Password"/>
                        </div>
                        <Link to="/Tasks"><button onClick={()=>handleSubmit} className="mt-4 border-2 border-black rounded px-2 py-1 bg-blue-400 hover:bg-blue-700 text-white font-bold">CONTINUE</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Homepage;