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

export default[
    { path:'/', component: Departments},
    { path:'/add', component: addDepartment},
    { path:'/details', component: departmentsDetails},
    { path:'/about', component: about},
    { path:'/contact_us', component: contact_us},
    { path:'/update', component: update},
    { path:'/analysis', component: analysis},
    { path:'/testing', component: testing},
    { path:'/design', component: design},
    { path:'/implementation', component: implementation},
    { path:'/delete', component: deletee}

];