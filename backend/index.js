const express = require('express')
const mysql = require('mysql')



const app = express()
const port = 5002

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'todo'
})

connection.connect((err)=>{
    if(err){
        console.log(`Error Connecting to db ${err}`)
        return
    }
    else{
        console.log(`Connection Successfull`)
    }
})

const api_key = '9012'
function handleAPI(req,res,next){
    const recievedKey = req.headers['api-key']
    if(!recievedKey || api_key !== recievedKey){
        return res.status(400).json({error:'Invalid API key'})
    }
    next();
}


app.use(express.json())
app.use(handleAPI)


app.post('/login',(req,res)=>{

    const {email} = req.body;
    const {password} = req.body;

    connection.query(`select *from user where email = (?) and passwrd = (?) `,[email,password],(err,result)=>{
        if(err){
            console.error(err)
            res.status(500).json({error:'Internal Server Error'})
        }
        if(result.length>0){
            console.log(`User Found, ${result[0]}`)
            res.status(200).json({status:true})
        }
        else{
            console.log(`User Not Found`)
            res.status(400).json({status:false})
        }
    })
})

app.post('/register',(req,res)=>{

    const {email} = req.body
    const {password} = req.body

    connection.query('INSERT INTO user(email,passwrd) values (?,?)',[email,password],(err,result)=>{
        if(err){
            console.error(err)
            res.status(500).json({error:'Internal Server Error'})
        }
        res.status(200).json({status:'Success'})
    })


})


app.listen(port,()=>{
    console.log(`Running on PORT 5002`)
})
process.on('SIGINT',()=>{
    connection.end()
    process.exit()
});



//Required Modules express, nodemon, mysql