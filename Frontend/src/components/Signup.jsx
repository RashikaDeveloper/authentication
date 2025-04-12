import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/api/auth/signup",{
                name,
                email,
                password
            })
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user))
            alert("Signup Successfull");
            navigate("/");
        } catch (err){
            alert("Signup Failed")
        }
    };
    return(
        <form onSubmit={handleSignup}>
            <h1>Signup</h1>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Signup</button>
        </form>
    );
}


export default Signup
