const express =require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const app =express()
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')

app.use(cors())

mongoose.connect(MONGOURI,{
	 useNewUrlParser:true,
	useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
	console.log("connected to mongo ")
})
mongoose.connection.on('error',(err)=>{
	console.log("err connecting",err)
})
require('./models/user')

app.use(express.json())

app.use(require('./routes/auth'))
if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})