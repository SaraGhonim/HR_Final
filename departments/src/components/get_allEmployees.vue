<template >
  <div id="myDIV">
    


    
  

      <div class="container">
       
        
        <table v-if="isHidden" class="table table-hover">
           
            <thead>
            <tr>
                <td>ID</td><br><br>
                <td> Name</td><br>
                <td>Skills</td><br>
                <td>phone</td><br>
                                <td>Salary</td><br>
                <td>birthDate</td><br>
                <td>absenceDays</td><br>
                <td>degree</td><br>
                <td>departmentId</td><br>
         
             <td>ProjectId</td><br>
             <td>position</td><br>
             <td>Image</td>
             
           
            </tr>
            </thead>
            <tbody>
               <tr v-for="value in data" :key="value._id">
                    <td>{{ value._id }}</td><br><br>
                    <td>{{ value.name }}</td><br>
                    <td>{{ value.skills }}</td><br>
                    <td>{{ value.phone }}</td><br>
                    <td>{{ value.salary }}</td><br>
                    <td>{{ value.birthDate }}</td><br>
                    <td>{{ value. absenceDays}}</td><br>
                    <td>{{ value.degree }}</td><br>
                    <td>{{ value.departmentId }}</td><br>
                    <td>{{ value.ProjectId }}</td><br>
                    <td>{{ value.position }}</td><br>
                    <td>{{ value.Image }}</td>
                   
                </tr>
            </tbody>
        </table>
    </div>
   <br>
 
 
  </div>
  
</template>

<script>
 import axios from 'axios';
export default { 
  
  name: 'employee',
  components:{},
  data(){
    return{
      data:[],
      isHidden: false
    }
  },
  methods:{
GET:function () {
  
        axios.get('http://localhost:8000/Employees/getEmployees')
      .then(response => {     
         this.data = response.data
         this.isHidden = true})
}
  },
  
 beforeMount(){
    this.GET()
 },
 
 }      
    
  
</script>

<style scoped>
table {
  padding: 3px;
	border-width: 1px;
 
  border-collapse:initial;
  width: 100%;
}
th, td {
  background-color:  #42a5c0c9;
  text-align: left;
  padding: 1px;
  font-size: 120%;
}
</style>