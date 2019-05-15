<template>
 <div class="Log in">
     <h1>{{msg}}</h1>
       
       <input v-model="email" placeholder="Email"><br/><br />

       <input type="password" v-model="password" placeholder="Password"><br /><br />

                  
     <button v-on:click="pressKey">Log in</button>    

 </div>
</template>


<script>
import axios from 'axios';

export default{
    name:'test',
   data(){
      
return {msg:'Log In',email:'' , password :''};

},
methods:{
  pressKey:function()
  {axios.post('http://localhost:8000/Users/login',{email :this.email, password: this.password})
      .then(response => {
          if(response.data !='success'){
          alert(rsponse.data);
        }
        if(response.data ==='success'){
          alert(response.data);
          this.$router.push('home')
        }
        })
      .catch(error=>{console.log(error)})
      
      }}}



</script>

<style scoped>

h1, h3 {
  font-weight: normal; 
  color: white;
}
button {padding: 12px 32px; 
background-color:  #42a5c0c9;
font-size: 20px;
width: 250px;
color: white;}
input{
  font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 30%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color: #8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}

</style>