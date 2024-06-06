const express = require('express');
const router = express.Router();
const courseController = require("../app/controllers/Courses.controller");
router.get('/showAll', courseController.showAllCourses);
router.post('/createCourse', courseController.createCourse);
router.get('/create', courseController.showFormAddCourse);
router.get('/table', courseController.showTable);
//router.post('/delete',courseController.deleteCourse);
router.get('/:id/edit',courseController.editFormCourse);
router.put("/:id/update",courseController.updateCourse)
router.delete("/:id/delete",courseController.deleteCourse)
module.exports = router;
