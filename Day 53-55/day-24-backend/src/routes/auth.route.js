const express = require("express");
const {
  getRegisterController,
  postRegisterController,
  getLoginController,
  postLoginController
} = require("../controllers/auth.contoller");

const router = express.Router();

// router.get("/register", getRegisterController);
// router.get("/register", postRegisterController);
router
  .route("/register")
  .get(getRegisterController)
  .post(postRegisterController);

router
  .route("/login")
  .get(getLoginController)
  .post(postLoginController);

module.exports = router;
