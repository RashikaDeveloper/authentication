    import React from "react";
    import {Link, useNavigate } from 'react-router-dom'

    function Navbar(){
        const navigate = useNavigate()

        const logout = ()=>{
            localStorage.removeItem('token');
            alert('Logged out successfully');
            useNavigate('login')
        };

        const isLogggedIn = !! localStorage.getItem('token')
        return(
            <nav>
                <Link to="/">Home</Link>
                {!isLogggedIn ?(
                    <>
                    <Link to= "/signup">Signup</Link>
                    <Link to= "/login">Login</Link>

                    </>
                ):(
                    <button onClick={logout}>Logout</button>
                )}
            </nav>
        )
    }
export default Navbar;