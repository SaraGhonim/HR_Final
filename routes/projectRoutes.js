const express = require('express');
const router = express.Router();
const Projects = require('../models/project');



router.get('/getProjects', async(req, res) => {
    console.log("get");
    const result = await Projects.find();
    res.send(result);
})



router.post('/addProject', async(req, res) => {
    console.log("post")
    const result = await Projects.create(req.body);
    console.log("post");
    res.send("added successfully ");
})


router.delete('/deleteProject/:name', async(req, res) => {
    try {
        const result = await Projects.find({ name: req.params.name });
        if (result.length > 0) {
            const deletedEmployee = await Projects.deleteMany({ name: result[0].name })
            res.send(`${deletedEmployee.deletedCount} projects have the same name have been deleted`);

        } else {
            res.send('This project is not exist');

        }

    } catch (error) {
        console.log(error.message)
    }
})

router.put('/updateProject/:name', async(req, res) => {
    try {
        console.log("put")
        const fresult = await Projects.find({ name: req.params.name });
        if (fresult.length > 0) {
            const result = await Projects.findOneAndUpdate(req.params.name, {
                name: req.body.name,
                projectRate: req.body.projectRate,
                notes: req.body.notes,
                employees: req.body.employees
            }, {
                new: true
            });
            res.send("changed data successfully");

        } else {
            res.send('This project is not exist');

        }

    } catch (error) {
        console.log(error.message)
    }
})


module.exports = router;