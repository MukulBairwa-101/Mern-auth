const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../util/utilFunctions");


let refreshTokens = [];


exports.signup = async (req, res) => {
  try {
    let errors = validationResult(req);

    let errorFields = errors.errors.map((errorObj) => {
      const { msg, param } = errorObj;

      return {
        msg,
        param,
      };
    });

    if (!errors.isEmpty()) {
      res.status(422).json({
        error: errorFields,
      });
    } else {
      const user = new User(req.body);

      res.setHeader("Content-Type", "application/json");

      user
        .save()
        .then(() => {
          res.status(200).json({
            status: true,
            message: "Sign Up successfully",
            user: user,
          });
        })
        .catch((err) => {
          res.status(400).json({
            status: false,
            message: "Error saving user",
          });
        });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Server error",
    });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    let user = await User.findOne({ email: email });
    console.log(user);

    let token, refreshToken;
    const matchPassword = async () => {
      return await bcrypt.compare(password, user.password);
    };

    if (user && (await matchPassword()) && user.email === email) {
      let _id = user._id;
      token = generateAccessToken(_id);
      refreshToken = generateRefreshToken(_id);

      refreshTokens.push(refreshToken);
    }

    res.status(201).json({
      status: true,
      user: {
        username: user.username,
        email: user.email,
        access_token: token,
        refresh_token: refreshToken,
      },
      message: "You are now signed in",
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Error signing in ",
      data:err.message
    });
  }
};




