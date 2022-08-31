const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");




//check authentication condition
const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"]||req.headers["x-auth-token"];  //case sensitive
    //   if (!token) token = req.headers["x-auth-token"];
    
      //If no token is present in the request header return error. This means the user is not logged in.
      if (!token) return res.send({ status: false, msg: "token must be present" });
    
      //try & catch is used for error handling
      try{
        let decoded = jwt.verify(token,'functionup-thorium')
      }
    
    catch(error){
     //console.log(error)
        return res.send({msg:error.message})
      }

      //Check Authorisation condition
      try{
        let decoded =  jwt.verify(token,'functionup-thorium')
        console.log(decoded);
        let userToModify = req.params.userId
        let userLoggedIn= decoded.userId
        if(userToModify!=userLoggedIn){
          return res.send({msg: " UnAuthorized User !"})
        }else{userId}
      }
    
    
      catch (error){}
    
      next()
    }

module.exports.authorise=authorise