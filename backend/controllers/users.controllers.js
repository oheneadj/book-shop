const fs = require("fs");
// get all users
const getAllUsers = (req, res) => {
    res.status(200).json({ success: true, data: users });
  }


// get user by id
const getUser = (req, res) => {
    const userId = req.params.id;
  
    // use only two equal signs because the userId is a string but the actual id in the array is a number
    const user = users.find((u) => u.id == userId);
  
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
  
    res.status(200).json({ success: true, data: user });
  }


// add new user
const createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
  
    let data = JSON.stringify(users);
    fs.writeFileSync("database.json", data);
  
    res.status(200).json(users);
  }

module.exports = {
    getAllUsers,
    getUser,
    createUser
}