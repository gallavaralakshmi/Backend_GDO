const Users = require("../models").users;

async function createUser({
    name, age, skills, email, password, mobile, gdo_id, role_id
}) {
    console.log("Inside create users")
    return Users.create({
        name: name,
        age: age,
        skills: skills,
        email: email,
        password: password,
        mobile: mobile,
        gdo_id: gdo_id,
        role_id: role_id,
    });
}


module.exports = { createUser };