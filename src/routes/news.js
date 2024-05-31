const express = require('express');
const router = express.Router();

const newController = require("../controllers/NewController")
router.use('/newnew',newController.showNew)
router.use('/',newController.index)

module.exports = router;