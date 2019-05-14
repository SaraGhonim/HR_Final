<template>
<html>
<body>

<h1 style="center">Department Details</h1>
<input type="button" id="b1" value="Department Details" v-on:click="getData" />

<table>
  <tr>
    <td>Name</td><br><br>

    <td>Capacity</td><br>

    <td>Manager</td><br>

    <td>associatedEmployees</td><br>

    <td>associatedProjects</td><br>
  </tr>
  <tr v-for="value in data" :key="value.name">

    <td>{{ value.name }}</td><br>

    <td>{{ value.capacity }}</td><br>

    <td>{{ value.manager }}</td><br>

    <td>{{ value.associatedEmployees }}</td><br>

    <td>{{ value.associatedProjects }}</td><br>

  </tr>
</table>

</body>
</html>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Departments',
  props: {
    msg: String
  },
  data(){
    return{data:[]};
  },
  methods:{
    getData: function(){
      console.log('dfgbh')
       axios.get('http://localhost:8000/Departments/getDepartmentData/'+"Testing")
      .then(response => {
        alert("Got it...")      
        this.data = response.data;  

    })
      .catch(error => console.log('this is the error: '+ error.message));
    
  }
  },
   beforeMount(){

    this.getData()

 }
};
</script>

<style >
  h1{
    font-family: arial, sans-serif;
    text-align: center;
    color:rgb(4, 103, 160);
    font-size: 60px;
  }
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 45%;
  margin-left: 28%;
  margin-top: 2%;
  border-radius : 10px;
 
  
}
td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 5px;
  font-size: 20px;
}
tr:nth-child(even) {
  background-color: #dddddd;
 
}
li{
  
  
  text-align: center;
  
  font-size: 20px;
}
#b1{
    position: relative;
    border-radius: 10px;
    text-align: center;
    background-color: white;
    outline: none;
    font:20px bold ;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}
</style>