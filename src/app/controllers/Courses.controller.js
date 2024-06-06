const Course = require("../models/Courses.model");
const { mutipleMongooseObject } = require("../../util/mongoose");
const { mongoToObject } = require("../../util/mongoose");

class CourseController {
    showAllCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                //res.json(courses)
                //console.log(courses);
                res.render('courses/showAllCourse', { courses: mutipleMongooseObject(courses) })
            })
            .catch(next)
        console.log("minhh");
    }

    createCourse(req, res, next) {
        // Create a new Course instance with data from the request body
        const newCourse = new Course(req.body);

        // Save the new course to the database
        newCourse.save()
            .then(() => {
                // Redirect to the list of all courses after successful save
                res.redirect('/courses/showAll');
            })
            .catch(next); // Pass any errors to the next middleware or error handler
    }

    showFormAddCourse(req, res, next) {
        res.render('courses/createCourse');
    }

    showTable(req, res, next) {
        Course.find({})
            .then(courses => {

                res.render('courses/table', { courses: mutipleMongooseObject(courses) })
            })
            .catch(next)
    }
    editFormCourse(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {

                res.render('courses/editCourse', { course: mongoToObject(course) })
            })
            .catch(next)
    }

    updateCourse(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/courses/table')
            })
            .catch(next);
    }
    deleteCourse(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('/courses/table')
            })
            .catch(next);
    }

}
module.exports = new CourseController();