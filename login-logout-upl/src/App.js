import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App(){


async function checkLoginUser(da){
    if(da.email === '' || da.password === ''){alert(`Please enter email and password`)}
    try{
        const response = await fetch(`http://127.0.0.1:5002/login`,{
            method:'POST',
            headers:{
                'api-key':'9012',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(da)
        })
        if(!response.ok){
            throw new Error(`Network Error`)
        }
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}

async function handleRegisterUser(user){
    if(user.email === '' || user.password === '')return;
    try{
        const response = await fetch(`http://127.0.0.1:5002/register`,{
            method:'POST',
            headers:{
                'api-key':'9012',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        if(!response.ok){
            throw new Error(`Network Error while fetching response`)
        }
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}
    return(
        <div>
            <BrowserRouter>
            <Routes>
                
                <Route exact path = "/" element = {
                    <Login    onClickHandle = {checkLoginUser}/>
                }/>
                <Route exact path = "/register" element = {
                    <Register resgisteringUser = {handleRegisterUser}/>
                }/>
                
            </Routes>

            </BrowserRouter>
            
            
        </div>
    )
}
export default App;