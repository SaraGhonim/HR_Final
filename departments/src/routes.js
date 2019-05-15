// Login and register
import main from './components/mainPage.vue'
import register from './components/reg.vue'
import login from './components/Test.vue'
import home from './components/home.vue'
// Department
import addDepartment from './components/addDepartment.vue'
import update from './components/update.vue'
import Departments from './components/Departments.vue'
import departmentsDetails from './components/departmentsDetails.vue'
import about from './components/about.vue'
import contact_us from './components/contact_us.vue'
import analysis from './components/analysis.vue'
import testing from './components/testing.vue'
import design from './components/design.vue'
import implementation from './components/Implementation.vue'
import deletee from './components/delete.vue'
// Employee
import get_all_employees from './components/get_allEmployees.vue'
import employee from './components/employee.vue'
import add_employee from './components/add_employee.vue'
import delete_employee from './components/deleteEmployee.vue'
import update_employee from './components/updateEmployee.vue'
// Projects
import projects from './components/projects.vue'
import getProjects from './components/getProjects.vue'
import addProject from './components/addProject.vue'
import deleteProject from './components/deleteProject.vue'
import updateProject from './components/updateProject.vue'

export default[
    // Logging
    { path:'/', component: main},
    {path:'/login', component: login},
    {path:'/register', component: register},
    {path:'/home', component: home},
    // Department
    { path:'/add', component: addDepartment},
    { path:'/details', component: departmentsDetails},
    { path:'/about', component: about},
    { path:'/contact_us', component: contact_us},
    { path:'/update', component: update},
    { path:'/analysis', component: analysis},
    { path:'/testing', component: testing},
    { path:'/design', component: design},
    { path:'/implementation', component: implementation},
    { path:'/delete', component: deletee},  
    {path:'/departments', component: Departments},
    // Employee
    {path:'/employees', component: employee},
    {path:'/getEmployees', component: get_all_employees},
    {path:'/addEmployee', component: add_employee},
    {path:'/updateEmployee', component: update_employee},
    {path:'/deleteEmployee', component: delete_employee},
    // Project
    {path:'/projects', component: projects},
    {path:'/getProjects', component: getProjects},
    {path:'/addProject', component: addProject},
    {path:'/updateProject', component: updateProject},
    {path:'/deleteProject', component: deleteProject}

];