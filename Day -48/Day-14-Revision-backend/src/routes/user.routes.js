const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");

// register - (comes in verification)
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    username,
  });
  /* if not exist return null. */

  if (isUserAlreadyExist) {
    return res.status(409).json({
      msg: "User already registered, Please Login",
    });
  }

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) /* 7 days */,
  });

  res.status(201).json({
    msg: "User Registered Successfully",
    user,
  });
});

router.get("/user", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      msg: "Unauthorized. token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ _id: decoded.id });
    return res.status(200).json({
      msg: "user data fetched successfully",
      user,
    });
  } catch (error) {
    res.status(401).json({
      msg: "unauthorized invalid token ",
      error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  // console.log(user);

  if (!user) {
    return res.status(404).json({
      msg: "User account not found",
    });
  }

  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return res.status(401).json({
      msg: "Invalid Password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  res.status(200).json({
    msg: "user logged in successfully",
    user,
  });
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    msg: "Logout Successfully!",
  });
});

module.exports = router;
