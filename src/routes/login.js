const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');
router.get('/table', loginController.showTable);
router.get('/mih', loginController.login);
module.exports = router;
