<template>
  <div class="home-main">
      <div class="image">
          <div class="links">
              <ul>
                  <li><router-link to="./">Home</router-link></li>
                  <li><router-link to="./allevents">Events</router-link></li>
                  <li><router-link to="./profile">Profile</router-link></li>
                  <li><router-link to="./profile">Signin</router-link></li>
                  <li><router-link to="./profile">Signup</router-link></li>
              </ul>
          </div>
          <div class="titless">
          <div class="title1">
              LiVE 
          </div>
          <div class="title2">
              SEMiNAR
          </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.image{
    position: absolute;
    width:100%;
    height:100%;
    background-image: url('./../assets/mic-bc.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    text-align: left;

    
}
.title1 {
    position: absolute;
    top:12px;
    font-size:150px;
    color: #fff;
    margin:10% 0 0 20%;
    letter-spacing: 5px;
}
.title2{
    position: absolute;
    top:250px;
    font-size:250px;
    color: #fff;
    margin:0 0 0 20%;
}
.image .links {
    align-items: center;
    margin-left:25%;
    margin-top:35px;
}
ul{
    align-items: center;
    margin:auto;
    display: inline-block;
   
}
li{
    float:left;
    margin-top:1rem;
    margin-right:4rem;
    width:50px;
    list-style-type: none;
    
    

}
li a{
    color: rgb(255, 255, 255);
    opacity: 0.9;

}
a:hover{
    opacity: 1  ;
}
@media only screen and (max-width: 800px) {
  .title1{
      font-size: 150px;
      top:90px;
  }
  .title2{
      font-size: 120px;
      top:240px;
  }
  .titless{
      position:fixed;
      margin-left:0;
  }
}
@media only screen and (max-width: 400px) {
  .title1{
      font-size: 100px;
      top:150px;
  }
  .title2{
      font-size: 70px;
      top:250px;
  }
  .titless{
      position:fixed;
      margin-left:0;
  }
  .image .links{
      margin-left:15%;
  }
}
</style>