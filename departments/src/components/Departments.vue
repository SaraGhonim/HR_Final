<template>
<!DOCTYPE html>
    <!--[if gt IE 8]><!-->
    <html>
    <header>
        <div class="head">
        <img src="@/assets/Logo.png" alt="Tanta Unversity">
        <h1>Departments of Software Engineering</h1>
        
        </div>
    </header>
    <body  >
        <div class="topnav" position: fixed>
            <a class="active" href="Home.html" target="_blank" >Home</a> 
            <select class="Departments" style="width:290px;" name="Departments" onchange="location = this.value;" >
                <option value="1" hidden>Departments</option>
                <option value="http://localhost:8080/#/implementation" >implementation</option>
                <option value="http://localhost:8080/#/analysis">Analysis</option>
                <option value="http://localhost:8080/#/design">Design</option>
                <option value="http://localhost:8080/#/testing">Testing</option>
           </select>
           <router-link to="/details">
              <a>Department Details</a>
           </router-link>
           <router-link to="/about">
              <a>About</a>
           </router-link>
           <router-link to="/contact_us">
              <a>Contact_US</a>
           </router-link>
            
        </div><br /><br />
        <form>
          <router-link to="/add">
              <button >ADD Department</button>
          </router-link><br /><br />
          <router-link to="/update">
              <button >UPDATE Department</button>
          </router-link><br /><br />
          <router-link to="/delete">
              <button >DELETE Department</button>
          </router-link><br /><br />
        </form>

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
  methods:{

  }
    
}

</script>

<style scoped>
   
  
  header{
   
    
    background-color:rgb(129, 174, 211);
    block-size: 90px;
    border-radius: 10px;
    
    
    }
    div{
      overflow:hidden;
      
      zoom:75%;
      
    }
  .head img {
        float: left;
        width: 80px;
        height: 80px;
        background:rgb(129, 174, 211);
        padding-left: 20px;
        padding-top: 1%;
        
      }
      
  .head h1 {
        position: relative;
        top: 1%;
        left: 30px;
        color: white;
        font-size: 55px;
        font-style:inherit ;
        margin-top: 1.2%;
       }
  .html { 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      }
  .topnav {
    overflow: hidden;
    background-color: rgb(218, 214, 218);
    border:0px;
    border-radius: 10px;
    
  }
  
  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 80px;
    text-decoration: none;
    font-size: 28px;
    font-family: Sans-serif ;
    border-radius: 10px;
    border: 0px;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    margin-right : 40px;
    
  }
    
  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: rgb(253, 252, 252);
    color: black;
    font-weight: bold; 
   
  }
  
  /* Style the "active" element to highlight the current page */
  .topnav a.active {
    background-color: #2196F3;
    color: white;
    
  }
  
  /* Style the search box inside the navigation bar */
  input[type=text] {
    position:absolute;
    text-align :left ;
    float: right;
    width: 280px;
    padding: 10px 16px ;
    border: none;
    margin-top: 12px;
    margin-right: 50px;
    font-size: 19px ;
    border-radius: 16px;
    font-family: Sans-serif;
    outline: 0px;
  } 
  .dep{
    text-align: center;
  }
  .Departments  {
    
   
    
    text-align: center;
    background-color: rgb(218, 214, 218);
    
    outline: none;
    font-size:30px ;
    font-family: Arial, Helvetica, sans-serif;
    
    top:80%;
    border:none;
    padding: 15px ;
    cursor: pointer;
   
    
  }
  
  .Departments:hover {
    background-color: rgb(253, 252, 252);
    color :rgb(126, 141, 163);
    font-weight: bold; 
    
    
    
  }
  h2{
    position: relative;
     text-align: center;
     margin-top: 2%;
     font-size: 100px;
     font-style:inherit ;
     color :rgb(126, 141, 163);
  }
  
      
  .image {
        position: relative;
        text-align: right;
        padding-top: 0.5%;
        padding-bottom: 150px;
        margin-top: 0px;
        margin-right: 2%;
         

      }
   
 
  
 
  
  /* When the screen is less than 600px wide, stack the links and
   the search field vertically instead of horizontally */
   @media screen and (max-width: 600px) {
    .Departments,.topnav input, .topnav input[type=text] {
      float: none;
      display: block;
      text-align: left;
      margin: 0;
      padding: 14px;
     
    }
    .topnav input[type=text] {
      border: 1px solid #ccc;
      
    }
  }
  footer{
    position:fixed;
    color: #ccc;
    padding-left: 1%;
    font-size: 18px;
    font-family: Sans-serif ;
    font: bold;
    
  }
  .adding{
  text-align: center;
  
  }
 button {padding: 14px 40px; 
background-color: rgb(129, 174, 211);
font-size: 20px;
width: 250px;
color: white;}
  td {
      vertical-align: top;
  }
a{
  width: 250px;

}
</style>
