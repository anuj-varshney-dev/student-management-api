const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

async function registerUser(req, res) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10); //here 10 is salt round
        const user = await User.create(req.body);
         res.status(201).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function loginUser(req, res) {
    try{
    const user = await User.findOne({ //it returns one object not an array 
    email: req.body.email
});

if (!user) {
    return res.status(401).json({
        message: "Invalid email or password"
    });
}

const isMatch = await bcrypt.compare(
    req.body.password, //plain text pass entered by user
    user.password   //hashed pass stored in mongodb
);

if (!isMatch) {
    return res.status(401).json({
        message: "Invalid email or password"
    });
}
const token = jwt.sign( //it creates a JWT jwt.sign(payload, secretKey, options) has 3 arguments
    {
        id: user._id,  //called payload
        role: user.role   
    },
    process.env.JWT_SECRET, //secret key used to sign the token 
    {
        expiresIn: "1h" //options
    }
);
res.status(200).json({
    message: "Login successful",
    token : token
});

}catch(err){
    res.status(500).json({
        message: err.message
    });
}
}

module.exports = {
    registerUser,
    loginUser
};