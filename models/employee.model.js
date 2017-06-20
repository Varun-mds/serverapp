var mongoose = require ('mongoose');
var employeSchema = mongoose.Schema({

    firstName:String,
    lastName: String,
    employeeId:String,
    designation:String
});

module.exports = mongoose.model('Employee',employeSchema);

