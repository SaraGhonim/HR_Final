const express = require('express');
const router = express.Router();
const Employees = require('../models/Employee');





router.get('/getEmployees', async(req, res) => {
    console.log("get");
    const result = await Employees.find();
    res.send(result);
})

router.get('/getEmployee/:name', async(req, res) => {

    const result = await Employees.find({ name: req.params.name });
    if (result.length === 0) {
        res.send('This Employee is not exist get');
    } else {
        res.send(result);
    }

})

router.post('/addEmployee', async(req, res) => {

    const result = await Employees.create(req.body);
    console.log("post");
    res.send("added successfully ");
})


router.delete('/deleteEmployee/:name', async(req, res) => {
    try {
        const result = await Employees.find({ name: req.params.name });
        if (result.length > 0) {
            const deletedEmployee = await Employees.deleteMany({ name: result[0].name })
            res.send(`${deletedEmployee.deletedCount} employees have the same name have been deleted`);

        } else {
            res.send('This Employee is not exist');

        }

    } catch (error) {
        console.log(error.message)
    }
})

router.put('/updateEmployee/:name', async(req, res) => {
    try {
        const fresult = await Employees.find({ name: req.params.name });
        if (fresult.length > 0) {
            const result = await Employees.findOneAndUpdate(req.params.name, {
                name: req.body.name,
                salary: req.body.salary,
                position: req.body.position,
                phone: req.body.phone,
                skills: req.body.array,
                absenceDays: req.body.absenceDays,
                departmentId: req.body.departmentId,
                ProjectId: req.body.ProjectId,
                birthDate: req.body.birthDate,
                degree: req.body.degree
            }, {
                new: true
            });
            res.send(result);

        } else {
            res.send('This Employee is not exist');

        }

    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;