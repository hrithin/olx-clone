const UserModel = require("../Models/UserModel");

const Signup = async (req, res) => {
    try {
      let result = await UserModel.create({
        ...req.body,
      });
      res.status(200).json({
        msg: "added",
        success: true,
      });
    } catch (err) {
        console.log(err)
      if ( err.code === 11000) {
        // Duplicate key error (MongoDB error code)
        res.status(400).json({ message: 'Duplicate key error. User already exists.' });
      } else {
        // Other validation errors or unexpected errors
        res.status(400).json({ message: 'User already exists' });
      }
    }
  };

module.exports = {
  Signup,
};
