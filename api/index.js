const express=require('express');
const cors=require('cors');
const mongoose=require("mongoose"); 
const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kushaliv147:ZSMk1mJVPbIshpeH@cluster0.wjrxybm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); 

app.post('/register',(req,res)=> {
    const{username, password}=req.body; 
    res.json({requestData:{username,password}});
});

app.listen(4000); 
//ZSMk1mJVPbIshpeH
//mongodb+srv://kushaliv147:ZSMk1mJVPbIshpeH@cluster0.wjrxybm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
