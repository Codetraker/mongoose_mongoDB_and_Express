const mongoose = require("mongoose");

mongoose.connect("....../UserAppPractice");

const User = mongoose.model("UserDetail", {name : String, email : String, password : String});

const user = new User({
    name : "Swaraj", 
    email : "admin@test.com" ,
    password : "Test*123" ,
})

user.save();