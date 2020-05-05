<template>

  <div id="app">
    
    <Sidebar />
    <Navbar/>

      <router-view class="view" ></router-view>
    
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      Sidebar,
      Navbar
    },
   

  }
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Anton');
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css');

  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    color: rgb(38, 0, 255);
    width: 100%;
    min-height: 100vh;
    // background: url('./assets/app_bg.jpg') center center;
    // background-size: cover;
    overflow: hidden;
    background-color: rgb(255, 154, 154);
  }
  .title-box{
    text-align: center;
    display: block;
    margin-top: 7vh;
    


  }

.fade1-enter-active,
.fade1-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade1-enter,
.fade1-leave-active {
  opacity: 0
}
</style>