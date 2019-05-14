<template>
    <html class="no-js"> 
    <body>
        
        <div class="back" style="text-align:center">
            
            <form class="form-style-8">
                <input type="text" id="input_name" placeholder="Department Name" value=""><br>
                <input type="number" id="input_Capacity" placeholder="capacity" value=""><br>
                <input type="text" id="input_Manager" placeholder="Manager Name" value=""><br>
                <input type="text" id="input_Associated_Employess" placeholder="Associated Employees" value=""><br>
                <input type="text" id="input_Associated_Projects" placeholder="Associated Projects " value=""><br>
            <button class="b" v-on:click="submit">submit</button>        
        
        
        </form>
        </div>
        
    </body>
</html>
</template>

<script>
import axios from 'axios';
export default {
  name: 'addDepartment',
  methods:{
        submit: function(){
                console.log('hellooo')
                var name = document.getElementById("input_name").value;

                var capacity = document.getElementById("input_Capacity").value;

                var manager = document.getElementById("input_Manager").value;

                var associatedEmployees = document.getElementById("input_Associated_Employess").value;

                var associatedProjects = document.getElementById("input_Associated_Projects").value;
                console.log(name);
                console.log(capacity);
                console.log(manager);
                console.log(associatedEmployees);
                console.log(associatedProjects);

       
        axios.put('http://localhost:8000/Departments/updateDepartment/'+name,{
                capacity: capacity,
                manager: manager,
                associatedEmployees: this.associatedEmployees.concat(associatedEmployees),
                associatedProjects: this.associatedProjects.concat(associatedProjects)
        })
        .then(response => {
            alert("Submitted successfully")
                console.log("xcvbh")      
        })
        .catch(error => console.log('this is the error: '+ error.message))
        
    }
  }
}
</script>

<style scoped>
    .form-style-8.centered {
     /* position: absolute; /* or absolute */
      top: 50%;
     
     
    }
    .form-style-8{
                 

        font-family: 'Open Sans Condensed', arial, sans;
        width: 500px;
        padding: 30px;
        background: #FFFFFF;
        margin: 50px auto;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
        -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
        -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);
        width: 200%;
        border-radius: 10px;

      
    }
  
    .form-style-8 input[type="text"],
    .form-style-8 input[type="date"],
    .form-style-8 input[type="datetime"],
   
    .form-style-8 input[type="number"],
    
    .form-style-8 textarea,
    .form-style-8 select 
    {   
        text-align: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        outline: none;
        display: block;
        width: 100%;
        padding: 7px;
        border: none;
        border-bottom: 1px solid #ddd;
        background: transparent;
        margin-bottom: 10px;
        font: 16px Arial, Helvetica, sans-serif;
        height: 50px;
       
    }
    .form-style-8 textarea{
        resize:none;
        overflow: hidden;
       
    }
    .form-style-8 input[type="button"], 
    .form-style-8 input[type="submit"]{
        -moz-box-shadow: inset 0px 1px 0px 0px #45D6D6;
        -webkit-box-shadow: inset 0px 1px 0px 0px #45D6D6;
        box-shadow: inset 0px 1px 0px 0px #45D6D6;
        background-color: #2CBBBB;
        border: 1px solid #27A0A0;
        display: inline-block;
        cursor: pointer;
        color: #FFFFFF;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 14px;
        padding: 8px 18px;
        text-decoration: none;
        text-transform: uppercase;
        
    }
    .form-style-8 input[type="button"]:hover, 
    .form-style-8 input[type="submit"]:hover {
        background:linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);
        background-color:#34CACA;
        
    }
    /* Style the submit button */
    input[type=submit] {
      background-color: rgb(155, 180, 226);
      color: rgb(210, 221, 241);
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      float: right;
    }
    div{
        float: left;
        margin-left: 5%;
        margin-right: 5%;
        padding-top: 3%;
    }
    .b{
        position: relative;
        border-radius: 10px;
        text-align: center;
        background-color: rgb(183, 193, 221);
        padding: 1% 1%;
        outline: none;
        font:23px bold ;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        margin: 1% 1% 1% 1%;
    }
 
</style>
