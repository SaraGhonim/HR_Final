<template>
 

    <form class="form-style-8" >
		
        <input type="text" id="input_name" placeholder="name" value="" required /><br>
        <input type="text" id="input_salary" placeholder="salary" value="" required /><br>
        <input type="text" id="input_position" placeholder="position" value="" required /><br>
		<input  type="text" id="input_skills" placeholder="Skills" value="" required /><br>
        <input type="number" id="input_phone" placeholder="phone" value="" required /><br>
		<input type="text" id="input_degree" placeholder="degree" value="" required /><br>
		<input type="number" id="input_absenceDays" placeholder="absenceDays" value="" required /><br>
		<input type="text" id="input_departmentId" placeholder="departmentId" value="" required /><br>
		<input type="text" id="input_ProjectId" placeholder="ProjectId" value="" required /><br>
		<input type="Date" id="input_birthDate" placeholder="birthDate" value="" required /><br>

<button v-on:click="submit">submit</button>

    </form>

</template>






    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
import axios from 'axios';
export default { 
	
    methods:{
         submit :function() {	 
			var name = document.getElementById('input_name').value;
			var skills = document.getElementById('input_skills').value;
			var array_skills= skills.split(",");
            var salary = document.getElementById('input_salary').value;
			var position = document.getElementById('input_position').value;
			var phone = document.getElementById('input_phone').value;
			var absenceDays = document.getElementById('input_absenceDays').value;
			var departmentId = document.getElementById('input_departmentId').value;
			var ProjectId = document.getElementById('input_ProjectId').value;
			var birthDate = document.getElementById('input_birthDate').value;
			var degree = document.getElementById('input_degree').value;
		
	if(name === "" ){
		alert("fileds must be exist")}
	else{
		axios.post('http://localhost:8000/Employees/addEmployee', {
						name: name,
						salary: salary,
						position: position,
						phone: phone,
						skills:skills,
						absenceDays:absenceDays,
						departmentId:departmentId,
						ProjectId:ProjectId,
						birthDate:birthDate,
						degree:degree
					})
					.then(function(response) {
						alert(response.data);
						console.log(response.data);
					})
					.catch(function(error) {
						alert(error)
						console.log("errorrrrrr");
						console.log(error);
					})
}
            
        }}
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