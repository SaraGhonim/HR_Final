<template>
 <div class="Log in">
     <h1>{{msg}}</h1>
        <router-link tag="button" to="/register">Register</router-link><br /><br />    
        <router-link tag="button" to="/login">Log in</router-link><br /><br />   
 </div>
</template>



<style scoped>

h1, h3 {
  font-weight: normal; 
}

button {padding: 14px 40px; 
background-color:  #5ecdeb;
font-size: 20px;
width: 250px;
color: white;}

</style>