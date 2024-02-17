import React,{useState} from 'react'
import "../index.css"
import background from '../background.jpeg'
import loader from './Hourglass.gif'
import { useNavigate } from 'react-router-dom'



function Register({resgisteringUser}){
    
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading,setLoading] = useState(false)

const navigate = useNavigate()


function handleRegister(e){

    e.preventDefault()
    if(email === '' || password === '')return;
    setLoading(true)
    const registedUser = {email:email, password:password}
    resgisteringUser(registedUser)

    setTimeout(()=>{
        setLoading(false)
        navigate('/?successMessage=Registration successful!')
    },4000)
    console.log(registedUser)
}

    return(<>
            <div className = "main">
            <div className = "first">
                <h1>Register</h1>

                <form onSubmit={handleRegister}>
                <div className = "testing">

                    <div className = "input-group">
                    <label>
                        Full Name
                    </label>
                    <input type = "text"
                           style = {{height: '28px',
                            borderRadius:'8px',
                            border:'1px solid #CECCCC',
                            padding:'12px 16px',
                            fontWeight: '500',
                            fontSize:'12px',
                            width:'250px'
                            }}
                            placeholder = "Your First & Last Name"
                    ></input>
                    </div>
                    <div className = "input-group">
                    <label>Email</label>
                    <input  type = "email"
                            style = {{height: '28px',
                            borderRadius:'8px',
                            border:'1px solid #CECCCC',
                            padding:'12px 16px',
                            fontWeight: '500',
                            fontSize:'12px',
                            width:'250px'
                            }}
                            placeholder='Enter your email'
                            value = {email}
                            onChange={(e)=>setEmail(e.target.value)}
                    ></input>
                    </div>
                    <div className = "input-group">
                    <label>Phone Number</label>
                    <input  type = "number"
                            style = {{height: '28px',
                            borderRadius:'8px',
                            border:'1px solid #CECCCC',
                            padding:'12px 16px',
                            fontWeight: '500',
                            fontSize:'12px',
                            width:'250px'
                            }}
                            placeholder='Enter your phone number'
                    ></input>
                    </div>

                    <div className = "input-group">
                    <label>Password</label>
                    <input  type = "password"
                            style = {{height: '28px',
                            borderRadius:'8px',
                            border:'1px solid #CECCCC',
                            padding:'12px 16px',
                            fontWeight: '500',
                            fontSize:'12px',
                            width:'250px'
                            }}
                            placeholder='Password'
                            value = {password}
                            onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                    </div>
                            

                </div>
                <br/>
                <button style = {{height:'40px',width:'200px',marginLeft:'200px',}}>Register</button>
                {loading && <div id = "type"><img src = {loader} alt = "nothign" style={{height:'20px',width:'20px'}}/></div>}
                </form>
                <p>By Opting to join, you are consenting to the following <b>Terms and Condition</b> and 
                acknowledging your willingness to recieve periodic emails from us</p>
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

export default Register;