const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");





const authorise = function(req, res, next) {
   

    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
   if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user =  userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    next()
}


module.exports.authorise=authorise