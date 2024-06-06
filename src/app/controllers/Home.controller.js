

const Course = require("../models/Students.model");
const {mutipleMongooseObject} = require("../../util/mongoose");

class HomePageController {
    showHomePage(req,res,next) {
        res.render('home')
    }
    showHomePage1(req,res,next) {
        res.json({"Minh" : "Minh"});
    }
}
module.exports = new HomePageController();
