//header.js
import {Link} from "react-router-dom"
import React, {useEffect, useContext, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header(){
    const {setUserInfo, userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile',{
            credentials:'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                console.log(userInfo);
                
            });
        });
    }, [userInfo]);

    function logout(){
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method:  'POST',
        });
        window.location.reload();
        setUserInfo(null);
    }
    function about(){
        fetch('http://localhost:4000/about ', {
            credentials: 'include',
            method:  'POST',
        });
    }



    return(

     
        <header>
            <Link to="/" className="logo">Confidence In Motion  | Home</Link>
            <nav>
                {userInfo && userInfo.username && (
                    <>
                        {userInfo.role === 'admin' && <Link to="/create">Create New Post</Link>}
                        <Link to="/about">About</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!userInfo || !userInfo.username && (
                    <>
                        <Link to="/about">About</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

            </nav>
        </header>
        
    );
    
}