var express = require('express');
var router = express.Router();
var Employee_controller = require('../controller/employee.controller');


router.get('/', Employee_controller.showEmployeeForm)

router.post('/employeeDet', Employee_controller.saveEmployeeDetails )

// router.get('/employeeList',Employee_controller.EmployeeList)

router.delete('/delete/:id',Employee_controller.DeleteList)

router.put('/update/:id',Employee_controller.UpdateList)


module.exports = router;
