<template>
 <div class="Home">
     <h1>{{msg}}</h1>

     <router-link tag="button" to="/departments">Departments</router-link><br /><br />    

     <router-link tag="button" to="/projects">Projects</router-link><br /><br />    
        
     <router-link tag="button" to="/employees">Employees</router-link><br /><br />    
  

 </div>
</template>


<script>

export default{
    name:'home',
   data(){
      
return {msg:''}
},
methods:{

}
}

</script>

<style scoped>

h1 {
  font-weight:lighter;
}
button {padding: 14px 40px; 
background-color:  #42a5c0c9;
font-size: 20px;
width: 250px;
color: white;} 



</style>