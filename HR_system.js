const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Depatrments = require('./models/Department');
const Users = require('./models/user');
const Employees = require('./models/Employee');
const Projects = require('./models/project');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const departmentRouter = require('./routes/departmentRoutes');
const employeeRouter = require('./routes/employeeRoutes');
const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');


app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());

app.use('/Departments', departmentRouter);
app.use('/Employees', employeeRouter);
app.use('/Users', userRouter);
app.use('/Projects', projectRouter);



Depatrments.insertMany([
    {
        name: "Analysis",
        capacity:20,
        manager:"Ahmed"
    },
    {
        name: "Implementation",
        capacity:30,
        manager:"Kamal"
    },
    {
        name: "Design",
        capacity:5,
        manager:"Manal"
    },
    {
        name: "Testing",
        capacity:10,
        manager:"soha" 
    }
]);

Employees.insertMany([

    {
    name: 'soha',
    phone: 100447766557,
    salary: 9000,
    skills: ['testing'],
    degree: 'PHP',
    position: 'tester'
},
{
    name: 'osama',
    phone: 9876567,
    salary: 8000,

    skills: ['programming'],
    position: 'programmer'
},
{
    name: 'moaaz',
    phone: 55702256,
    salary: 7900,
    skills: ['analysis'],
    position: 'analysist'
},
{
    name: 'mohannad',
    phone: 765324567,
    salary: 50000,
    skills: ['software engineer'],
    position: 'manager'
}
])

Projects.insertMany([{
    name: 'Nooon',
    projectRate: "good",
    notes: "online shooping",
    employees: ['ahmed', 'soha'],

}, ])

async function hashingPassword(pass){
    const salt = await bcrypt.genSalt(10);
    pass = await bcrypt.hash(pass, salt);
    return pass
}
/*
async function insertUser(){
Users.User.insertMany([
    {userName:'SaraGhonim',email:'saraghonim@gmail.com',password:await hashingPassword('12345')},
    {userName:'AliMohamed',email:'alimohamed@gmail.com',password:await hashingPassword('99999')},
    {userName:'YomnaAli'  ,email:'yomnaali@gmail.com'  ,password:await hashingPassword('55555')}
    ])
}
insertUser();
*/
mongoose.connect('mongodb://localhost/HR-System', {useNewUrlParser: true} )
.then(() => console.log('connected to db successfully'))
.catch((err) => console.log(err));


app.listen(8000, () => console.log('listeninig for requests...'));