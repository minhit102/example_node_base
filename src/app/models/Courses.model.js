const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    name: { type: String, maxLength: 225 },
    description: { type: String, maxLength: 225 },
    image: { type: String, maxLength: 225 },
    slug: { type: String, maxLength: 225 }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
