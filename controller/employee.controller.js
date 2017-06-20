var Employee = require('../models/employee.model');

exports.showEmployeeForm = function(req, res, next) {
    res.render('employeeForm');
}

exports.saveEmployeeDetails = function(req, res, next) {
    var employeeDetails = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        employeeId: req.body.employeeId,
        designation: req.body.designation
    })
    employeeDetails.save(function(err, employeeDetails) {
        if (err) {
            res.render('error')
        } else {
            Employee.find({}, function(err, listOfEMployees) {
                if (err) {
                    res.render('error')
                } else {
                    res.render('employeeList', {
                        list: listOfEMployees
                    })
                }
            })
        }

    })
}

// exports.EmployeeList = function(req,res,next){
//     Employee.find({},function(err,listOfEMployees){
//         if(err){
//             res.render('error')
//         }else{

//              res.render('employeeList',{ list:listOfEMployees })
//         }
//     })

// }

exports.DeleteList = function(req, res, next) {
    Employee.findOneAndRemove({
        _id: req.params.id
    }, function(err, deleteList) {
        if (err) {
            res.send('Erro12')
        } else {
            res.send('successful')
        }
    })
}

exports.UpdateList = function(req, res, next) {
    Employee.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            employeeId: req.body.employeeId,
            designation: req.body.designation
        }
    }, function(err, List) {
        if (err) {
            res.send('error')
        } else {
            res.send('Success')
        }
    })
}