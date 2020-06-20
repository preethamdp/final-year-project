<template>
  <div class="foot-container">
      
      <footer class = "foot" v-bind:class="{footer:isActive,footerfix:!isActive}">
          <div class="part1">
              <ul>
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/allevents">Events</router-link></li>
                  <li><router-link to="/profile">Profile</router-link></li>
                  <li><router-link to="/about">About</router-link></li>

              </ul>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    props:{
        pos:{
            type:Boolean,
            required:true,
        }
    },
    data:()=>{
        return{
            isActive:this.pos
        }
    }

}
</script>

<style>
/* body{
    overflow-y: scroll;
} */

.foot{
    bottom:0px;
    background-color:rgb(238, 238, 238);
    width:100%;
}
.footerfix{
    position: fixed;
    height:30px;
    padding: 1rem;
    
}
.footer{
    position: relative;
    height:30px;
    padding: 1rem;
   
}
.foot ul{
    align-items: center;
    margin:auto;
}
.foot li{
    display: inline-block;
    margin:0px;
    list-style-type: none;
    width:120px;
    
}
.foot li a{
    text-align: center;
    display: inline-block;
    position: relative;
    top:0;
    text-decoration: none;
    color:rgb(33, 54, 236);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    
}

</style>