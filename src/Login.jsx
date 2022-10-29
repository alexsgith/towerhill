import './login.css'
import Home from "./home/Home"
import React from 'react';
//import {BrowserRouter, Route, Routes, useNavigate,} from 'react-router-dom';
//import { redirect } from 'react-router-dom';
function Login() {
    const passw="1234";
    // function getPass()
    // {
    //    if(document.querySelector('input').value === passw)
    //     {
    //         <Home />
    //     }
    //     else{ window.alert("Wrong Password")}
    // }
    return (
        <div className='name'>
          <h2 className='font-bold text-[#1d3d6a] justify-center'>Welcome to Towerhill</h2>  
          <br />
            <div className= 'box bg-white drop-shadow-lg rounded-lg' >
                <img src='./images/logo.png' alt="logo"></img><br /><br />
                <label for="psw">Password</label><br />
                <input className=' pwd rounded-lg bg-[#61dafb] text-center' type="password" id="psw" name="psw" required></input><br /> 
                <button className='btn w-40 bg-[#61dafb] shadow-lg shadow-[#cbf1fb] hover:shadow-teal-500 ' onClick={
                     function getPass()
                     {
                        if(document.querySelector('input').value === passw)
                         {
                                <Home />
                         }
                         else{ window.alert("Wrong Password")}
                     }
                    }>Submit</button>
            </div> 
        </div>
    );
}
export default Login;