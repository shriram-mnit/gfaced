const express =require('express')
const mongoose = require('mongoose')
const path = require('path')
const app =express()
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')
mongoose.connect(MONGOURI,{
	 useNewUrlParser:true,
	useUnifiedTopology:true
})
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connection.on('connected',()=>{
	console.log("connected to mongo ")
})
mongoose.connection.on('error',(err)=>{
	console.log("err connecting",err)
})
require('./models/user')

app.use(express.json())

app.use(require('./routes/auth'))
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
