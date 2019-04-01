const express = require('express');
const homeController = require('./controller/home.js')
const login = require('./controller/login.js')
const router = express.Router();
/**
 * mvc 
 */

/* GET users listing. */
router.get('/home/page', homeController.getBanner)
router.get('/Verification', login.Verification)
router.get('/userInfo', login.UserInfo)
router.post('/login', login.login)

module.exports = router;
