import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/api/auth/login" , {
                email,
                password,
            })
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data.user))
            alert("Login Successfull!")
            navigate('/')
        }
        catch(err){
            alert("Login Failed")
        }
    };
    return(
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    )
}



export default Login
