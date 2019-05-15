<template>
  <body>

    <form class="form-style-8">
        <input type="text" id="input_name" placeholder="Name" value="" required><br>
        <input type="text" id="input_projectRate" placeholder="ProjectRate" value=""><br>
		<input type="text" id="input_notes" placeholder="Notes" value=""><br>
		<input type="text" id="input_employees" placeholder="Employees" value=""><br>

        <button type="button" v-on:click="change">sub</button>

    </form>
    </body>
</template>






<script>
import axios from 'axios';
export default { 
	
    methods:{
         change :function() {	 
            var name = document.getElementById('input_name').value;
            var projectRate = document.getElementById('input_projectRate').value;
			var notes = document.getElementById('input_notes').value;
			var employees = document.getElementById('input_employees').value;
			var array = employees.split(",");
           
			if(!name){
				alert('please enter Project name')
			}
			else{
            axios.put('http://localhost:8000/Projects/updateProject/'+name, {
                    name: name,
                    projectRate: projectRate,
                    notes: notes,
                    employees: array
                })
                .then(function(response) {
					alert("post")
					alert(response.data);
                })
                .catch(function(error) {
					alert(error)
                    console.log("errorrrrrr");
                    console.log(error);
                })
        }}}
        }
    </script>
<style scoped>
.form-style-8.centered {
  position: absolute; /* or absolute */
  top: 50%;
  left: 50%;
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
}
.form-style-8 h2{
	background: #4D4D4D;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', sans-serif;
	color: #797979;
	font-size: 18px;
	font-weight: 100;
	padding: 20px;
	margin: -30px -30px 30px -30px;
}
.form-style-8 input[type="text"],
.form-style-8 input[type="date"],
.form-style-8 input[type="datetime"],
.form-style-8 input[type="email"],
.form-style-8 input[type="number"],
.form-style-8 input[type="search"],
.form-style-8 input[type="time"],
.form-style-8 input[type="url"],
.form-style-8 input[type="password"],
.form-style-8 textarea,
.form-style-8 select 
{
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
	height: 45px;
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
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
</style>