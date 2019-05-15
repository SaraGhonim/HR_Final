<template >
  <div id="myDIV">
    


    
  

      <div class="container">
       
        
        <table v-if="isHidden" class="table table-hover">
           
            <thead>
            <tr>
                <td>ID</td><br><br>
                <td>Name</td><br>
                <td>ProjectRate</td><br>
                <td>Notes</td><br>
                <td>Employees</td><br>
           
            </tr>
            </thead>
            <tbody>
               <tr v-for="value in data" :key="value._id">
                    <td>{{ value._id }}</td><br><br>
                    <td>{{ value.name }}</td><br>
                    <td>{{ value.projectRate }}</td><br>
                    <td>{{ value.notes }}</td><br>
                    <td>{{ value.employees }}</td><br>
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
  
        axios.get('http://localhost:8000/Projects/getProjects')
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