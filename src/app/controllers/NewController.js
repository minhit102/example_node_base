//onst Course = require('../models/Course');

class NewController {
    index(req, res) {
        res.render('home');
    }

    showJon(req, res) {
        res.render('home');
    }

}
module.exports = new NewController();
