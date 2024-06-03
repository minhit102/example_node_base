const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');
router.use('/table', loginController.showTable);
router.use('/', loginController.login);
module.exports = router;
