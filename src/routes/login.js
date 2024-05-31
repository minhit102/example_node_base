const express = require('express');
const router = express.Router();
const loginController = require("../controllers/LoginController");
router.use('/table',loginController.showTable);
router.use('/',loginController.login);
module.exports = router;

