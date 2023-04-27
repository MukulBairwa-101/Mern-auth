const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.generateAccessToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'10m'})
}
exports.generateRefreshToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_REFRESH_SECRET)
}
