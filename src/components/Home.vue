<template>
  <div class="home-container">
      <Sidebar />
      <Navbar />

      
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
export default {
  components:{
      Navbar,
      Sidebar
  }

}
</script>


<style>

@media only screen and (min-width: 600px) {
  .home{
      
  }
}





</style>