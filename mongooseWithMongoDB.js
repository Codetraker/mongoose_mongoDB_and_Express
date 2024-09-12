const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("......./UserAppPractice");

const User = mongoose.model("UserDetail", {name : String, email : String, password : String});

app.post("/signup", async function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existUser = await User.findOne({email : email});

    if(existUser){
        return res.status(400).send("Username already exist!");
    }

    const user = new User({
        name : name ,
        email : email ,
        password : password ,
    });

    user.save();

    res.json({
        "msg" : "Account created Succesfully"
    });
});

app.listen(3000);