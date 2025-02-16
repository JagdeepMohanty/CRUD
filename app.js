// CRUD OPERATIONS 
const express =require('express');
const app =express();


const userModel = require('./usermodel');
const { name } = require('ejs');

app.get('/',(req,res)=>{
    res.send('heyyy');
})


//create 
app.get('/create',async(req,res)=>{
   let createduser= await userModel.create({
        name:'jagdeep',
        email :"jagdeep@gmail.com",
        userName:"Jagdeep"
        });
    });
//update
    app.get('/update',async (req,res)=>{
       let updateduser = await userModel.findOneAndUpdate({userName:"Jagdeep"},{name:"Jagdeep mohanty"},{new : true });
       res.send(updateduser);
    });

//read
    app.get('/read', async(req,res)=>{
        let users = await userModel.find();
        res.send(users);
    });
//delete
   app.get('/delete',async (req,res)=>{
        let users = await userModel.findOneAnddelete({name:"jagdeep"},);
        res.send(users);
     });




app.listen(8000);
