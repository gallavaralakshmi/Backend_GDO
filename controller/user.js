const { where } = require('sequelize');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Users = require("../models").users;
const Roles=require("../models").roles;
const Gdos=require("../models").gdos;
Roles.belongsTo(Users,{targetKey:"role_id",foreignKey:"id"});
Gdos.belongsTo(Users,{targetKey:"gdo_id",foreignKey:"id"});
async function getAllEmployees() {
    return Roles.findAll({
      
       include:{
           model:Users,
           required:true,
           attributes:['name','skills']
       },
       where:{role:"Employee"},
       attributes:['role']
    })
}

async function getAllAdmins() {
    return Roles.findAll({
      
        include:{
            model:Users,
            required:true,
            attributes:['id','name','skills','email','gdo_id'],
        },
        where:{role:"Admin"},
        attributes:['role']
     })
}
async function getAdminByGdo(gdo_id) {
    return Roles.findAll({
        attributes:['role'],
        include:{
            model:Users,
            where:{gdo_id:gdo_id},
            required:true,
            attributes:['id','name','skills']
        },
        where:{role:"Admin"},
    })
}

async function getAllEmployeesunderGdo(gdo_id) {
    return Roles.findAll({
        attributes:['role'],
        include:{
            model:Users,
            where:{gdo_id:gdo_id},
            required:true,
            attributes:['id','name','skills']
        },
        where:{role:"Employee"},
    })
}

async function getGdoByUserid(id) {
    return Gdos.findAll({
        attributes:['gdo'],
        include:{
            model:Users,
            where:{gdo_id:gdo_id},
            required:true,
            attributes:['id','name','skills']
        },
        where:{role:"Employee"},
    })
}

module.exports = { getAllEmployees, getAllAdmins ,getAdminByGdo,getAllEmployeesunderGdo};