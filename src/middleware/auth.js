const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");




//check authentication condition
const authorise = function (req, res, next) {
  try {
    //______________________________check token present or not________________________________________

    let token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

    //_______________________if token present then verify valid or not__________________________ 

    let decoded = jwt.verify(token, 'functionup-thorium')

    //___________________________||check if user is Authorised or not||____________________________________

    let userToModify = req.params.userId
    let userLoggedIn = decoded.userId
    if (userToModify != userLoggedIn) {
      return res.status(403).send({ msg: " UnAuthorized User !" })
    }
    next()   //_______________if authorised then call to the next function whcih is in userController file...
  }

  catch (error) {
    return res.status(500).send({ msg: error.message })
  }

}

module.exports.authorise = authorise