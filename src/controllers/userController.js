const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//___________________Create User___________________________________________________________________

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData, });
    }
    else {
      res.status(400).send({ status: false, msg: "BAD REQUEST" })
    }
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
};


//____________________Login User____________________________________________________________________

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({ status: false, msg: "username or the password is not corerct", });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  }

  catch (err) {
    res.status(500).send({ msg: err.message })
  }
}


//_____________________Get User Details________________________________________________________________

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
};



//____________________Update User___________________________________________________________________________

const updateUser = async function (req, res) {
  
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(201).send({ status: true, data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ msg: "UnAuthorised User", err: err.message })
  }
}


//__________________________Delet User|update isDeleted key value to true__________________________________

const deleted = async function (req, res) {
  try {
    let userId = req.params.userId
    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    if (!deletedUser) {
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }
    res.status(201).send({ status: true, msg: deletedUser })
  }
  catch (err) {
    return res.send({ status: false, msg: "No such user exists" });
  }
}
//_____________________________________________________________________________________________________________
// const postMessage = async function (req, res) {
//   let updatedPosts = req.body.posts
// updatedPosts.push(message)
//   let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })


//   return res.send({ status: true, data: updatedUser })
// }



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
//module.exports.postMessage = postMessage
module.exports.deleted = deleted