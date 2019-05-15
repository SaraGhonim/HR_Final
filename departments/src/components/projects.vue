<template class="page">
  <div >
          <router-link to="/getProjects">
          <button >Get</button>
      </router-link><br /><br />
      <router-link to="/addProject">
          <button>Post</button>
      </router-link><br /><br />
      <router-link to="/updateProject">
          <button>Update</button>
      </router-link><br /><br />
      <router-link to="/deleteProject">
          <button>Delete</button>
      </router-link><br /><br />

          
 </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
 button {padding: 14px 40px; 
background-color:  #42a5c0c9;
font-size: 20px;
width: 250px;
color: white;} 
 

</style>
