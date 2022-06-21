const express=require("express");
const router=express.Router();
const userController=require("../controller/user");
const verifyToken=require("./verify");
const db = require("../models");

router.get("/employees",verifyToken.isSAdmin,async(req,res)=>{
    try{
        const users=await userController.getAllEmployees();
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.get("/admins",verifyToken.isSAdmin,async(req,res)=>{
    try{
        const users=await userController.getAllAdmins();
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.get("/employeesundergdo",verifyToken.isAdmin,async(req,res)=>{
    try{
        //const id=req.query.gdo_id;
        //const givenUser=await db.users.findOne({where:{id}});
        //console.log(`given admin gdo is:${givenUser.toJSON().gdo}`);
        const users=await userController.getAllEmployeesunderGdo(req.query.gdo_id);
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.get("/adminbygdo",verifyToken.isAdmin,async(req,res)=>{
    try{
        //const id=req.query.gdo_id;
       // const givenUser=await db.users.findOne({where:{id}});
       // console.log(`given admin gdo is:${givenUser.toJSON().gdo}`);
        const users=await userController.getAdminByGdo(req.query.gdo_id);
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});

router.get("/gdobyuserid",verifyToken.isAdmin,async(req,res)=>{
    try{
        //const id=req.query.gdo_id;
       // const givenUser=await db.users.findOne({where:{id}});
       // console.log(`given admin gdo is:${givenUser.toJSON().gdo}`);
        const users=await userController.getGdoByUserid(req.query.id);
        res.json(users);
    }
    catch(err){
        res.json({
            error:err.toString(),
        })
    }
});


module.exports=router;