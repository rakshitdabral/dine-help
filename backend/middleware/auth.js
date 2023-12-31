const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

exports.Protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log("token found")
        try{
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, "secretkey")
            console.log("success")
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
        
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})