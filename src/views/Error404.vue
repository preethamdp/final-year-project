<template>
  <div class="error">
      <div class="content">
      <div class="e404">
       <span>404</span><br>
          page not found
      </div>
      </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
body{
    
    max-height: 100vh;
}
.error{
    
margin:0 0 0 0;
  background-image:url('./../assets/blackhole.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size:cover;
  height: 100%;
  width:100%;
  
 position:fixed;
}
.content{
    padding:20% 0;
    text-align: center;
    display:block;
    margin:auto;
    width:40%;
    height: 100%;
    letter-spacing: 3px;
    position: relative;
    color:rgb(255, 255, 255);
    text-shadow: 1px 2px rgba(0,0,0,0.3);
    font-size: 24px;
    
    
    
}
.content span{
    margin:0;
    padding: 0;
    font-size: 114px;
    letter-spacing: 4px;
    color:rgb(0,26,255)
}

</style>