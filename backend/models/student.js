const mongoose = require('mongoose');

// ***** Build Your Model Schema here *****
const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    studentNumber: {type: String, required: true}
})

module.exports = mongoose.model('Student', studentSchema);
