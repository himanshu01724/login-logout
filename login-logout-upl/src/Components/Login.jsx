import React,{useEffect, useState} from 'react'
import "../index.css"
import logo192 from "../logo512.png"
import background from '../background.jpeg'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Login({onClickHandle}){

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [successMessage, setSuccessMessage] = useState('')
const location = useLocation()


useEffect(()=>{
    const searchParams = new URLSearchParams(location.search)
    const message = searchParams.get('successMessage')
    if(message){
        setSuccessMessage(message);

        const time = setTimeout(()=>{
            setSuccessMessage('')
        },2000);

        return () => clearTimeout(time)
    }
},[location.search])

function handleFormData(e){
    e.preventDefault()
    const newUser = {email:email, password:password}
    onClickHandle(newUser)
}
    return(<>
        <div className = "main">
            <div className = "first">
                <img src = {logo192} alt = "another" style = {{height:'150px'}}/>
                <h1>Welcome!</h1>
                
                <form style = {{display:'flex',flexDirection:'column'}} onSubmit={handleFormData}>
                    <label>
                        Email
                    </label><br/>
                    <input type = "email"
                           style = {{height: '28px',
                                    borderRadius:'8px',
                                    border:'1px solid #CECCCC',
                                    padding:'12px 16px',
                                    fontWeight: '500',
                                    fontSize:'12px'
                                    }}
                            placeholder = "Enter your registered email"
                            value = {email}
                            onChange={(e)=>setEmail(e.target.value)}
                    ></input><br/>
                    <label>Password</label><br/>
                    <input  type = "password"
                            style = {{height: '28px',
                            borderRadius:'8px',
                            border:'1px solid #CECCCC',
                            padding:'12px 16px',
                            fontWeight: '500',
                            fontSize:'12px'
                            }}
                            placeholder='Password'
                            value = {password}
                            onChange={(e)=>setPassword(e.target.value)}
                    ></input><br/>
                    <button style = {{height:'40px',width:'200px'}}>LOG IN</button>
                    {successMessage && <div><p>{successMessage}</p></div>}
                </form>
                <h4>New to React? 
                    
                <Link to = '/register' id = "linker"> Register Now</Link>
                
                </h4>
            </div>
            <img src = {background} alt = "nothing" style = {{height:'700px',width:'600px',borderRadius:'100px',zIndex:'-1'}}/>
        </div>
        <div className = "outsider">
            <h4>Upcoming Projects</h4>
            <ul>
            <li>Advance Reducer</li>            
            <li>React Router</li>
            <li>Redux</li>
            </ul>
        </div>
        </>
    )
}

export default Login;