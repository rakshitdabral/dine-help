const express = require("express");
const {getUserDetails , userLogin , userSignup , deleteUser,showProfile ,getUserAll} = require('../controller/user-controller')
const User = require("../models/User");
const { Protect } = require("../middleware/auth");

const router = express.Router();

router.post("/api/v1/signup", userSignup)
router.post('/api/v1/login', userLogin);
router.get('/api/v1/getUser',getUserDetails)
router.delete('/api/v1/deleteUser',deleteUser)
router.get('/api/v1/getall', getUserAll)
router.get('/api/v1/profile',Protect, showProfile)

module.exports = router;
