<template>

  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Departments from './components/Departments.vue'
import addDepartment from './components/addDepartment.vue'
import departmentsDetails from './components/departmentsDetails.vue'
import about from './components/about.vue'
import contact_us from './components/contact_us.vue'
import analysis from './components/analysis.vue'
import testing from './components/testing.vue'
import design from './components/design.vue'
import implementation from './components/Implementation.vue'
import update from './components/update.vue'

export default {
  name: 'app',
  components: {
    Departments,
    addDepartment,
    departmentsDetails,
    about,
    contact_us,
    analysis,
    testing,
    design,
    implementation,
    update
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: url('assets/comp.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
   background-size: cover;
}

</style>
