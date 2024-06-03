const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, maxLength: 225 },
    address: { type: String, maxLength: 225 },
    university: { type: String, maxLength: 225 }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
