const express = require('express');
const router = express.Router();

const HomePage = require('../app/controllers/Home.controller');
router.get('/', HomePage.showHomePage);
router.get('/json', HomePage.showHomePage1);

module.exports = router;
