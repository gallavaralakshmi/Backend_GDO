const express=require("express");
const router=express.Router();
const registerController=require("../controller/register");
const bodyParser=require("body-parser");
const jsonParser=bodyParser.json();
const bcrypt=require("bcrypt");
const db=require("../models/");
const {body,validationResult}=require("express-validator");

const validate=[
    body('name').isAlpha().withMessage('Name should contain only Alphabets'),
    body('age').isNumeric().withMessage('Age should be in numbers')
    .matches(/^[1-9]{1}[0-9]$/).withMessage('Age should be valid doesnt starts with 0')
    .isLength({min:1,max:3}).withMessage('Length should be maximum 3'),
    body('skills'),
    body('email').isEmail().withMessage('Enter valid email')
    .custom((value)=>{
        console.log("Checking wherher the email given for registration is exists or not")
       return db.users.findOne({where:{email:value}}).then(user=>{
           if(user){
               return Promise.reject('Email is in use');
           }
       });
    }),
    body('password').isLength({min:8})
    .withMessage('Password must contain atleast 8 characters')
    .matches(/\d/)
    .withMessage('Must contain atleast 1 number'),
    body('mobile').isNumeric().withMessage('Mobile contain only digits')
    .matches(/^[6-9]{1}[0-9]{9}$/).withMessage('Enter a valid mobile number')
    .isLength({min:10,max:10}).withMessage('Mobile number contain 10 digits'), 
    body('gdo'),body('role')  
]


router.post("/",jsonParser,validate,async(req,res,next)=>{
    console.log(req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    else{
        const hashPassword=bcrypt.hashSync(req.body.password,5);
        /**/
    try{   
        const role_id=req.body.role_id;
        const gdo_id=req.body.gdo_id;
        const role=await db.roles.findOne({where:{id:role_id}})
        const gdo=await db.gdos.findOne({whwere:{id:gdo_id}})
        let register=true;
        if(gdo.gdo=="ALL"&&role.role!="SAdmin") {
            register=false;
            res.status(400).json({error:"ALL gdo is only for super admin"});
        }
        else if(role.role=="SAdmin"){
            const user=await db.users.findOne({where:{role}});
            if(user){
                register=false;
                res.status(400).json({error:"Super Admin is already there"});
            }
        }
        else if(role.role=="Admin"){
            const user=await db.users.findOne({where:{role,gdo}});
            if(user){
                register=false;
                res.status(400).json({error:"Already admin is there for that gdo"});
            }
        }
        if(register){
            const data={
                name:req.body.name,
                age:req.body.age,
                skills:req.body.skills,
                email:req.body.email,
                password:hashPassword,
                mobile:req.body.mobile,
                gdo_id:req.body.gdo_id,
                role_id:req.body.role_id
            }
    const newUser=await registerController.createUser(data);
    console.log("==================");
    console.log("Registered user details:");
    console.log(newUser);
    res.json({message:`Created new user with user_id:${newUser.id}`});
        }
    }
    catch(err){
        res.json({
            error:err.toString(),
        });
    }
}
});

module.exports=router;