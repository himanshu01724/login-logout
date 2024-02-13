import React, { useState } from 'react'
import "./index.css"
import logo192 from "./logo512.png"
import background from './background.jpeg'



function Login({onClickHandle}){

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

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
                </form>
                <h4>New to React? Register Now</h4>
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
function App(){

const [status,setStatus] = useState(false)

async function checkLoginUser(da){
    console.log(da)
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
        setStatus(data.status)
    }
    catch(error){
        console.error(error)
    }
}


    return(
        <div>
            <Login onClickHandle = {checkLoginUser}/>
            {status && (<h1>Himanshu Joshi</h1>)}
        </div>
    )
}
export default App;