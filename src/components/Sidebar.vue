<template>
  <div class="container" :class="{'show': showSidebar}" >
    <div class="control">
      <i class="fas fa-bars" @click="showNav"></i>
    </div>
    <!-- <div class="navigation-icons">
      <i class="fas fa-home"></i>
      <i class="fas fa-camera-retro"></i>
      <i class="fas fa-user-circle"></i>
      <i class="fas fa-comment-dots"></i>
      <i class="fas fa-info-circle"></i>
    </div> -->
    <div class="navigation-links"  @click="showNav">
      <transition-group name="fade">
        <div v-show="showLink" key="1"><router-link to="./">Home</router-link></div>
        <div v-show="showLink" key="2"><router-link to="./allevents">Events</router-link></div>
        <div v-show="showLink" key="3"><router-link to="./profile">Portfolio</router-link></div>
        <div v-show="showLink" key="4"><router-link to="./about">About</router-link></div>
        <!-- <div v-show="showLink" key="5">FAQ</div> -->
        <div v-show="showLink" key="6" class="signIn" v-if="this.token == false"><a href="./signin">SignIn</a></div>
        <div v-show="showLink" key="7" class="signUp" v-if="this.token == false"><a href="./signup">SignUp</a></div>
        <div v-show="showLink" key="7" class="logout"  v-if="this.token == true" @click="logout"><span id ="logout">Logout</span></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    data: () => {
      return {
        showSidebar: false,
        showLink: false,
        token: localStorage.accessToken  || false
      }
    },
    computed:{
      ...mapState([
        'accessToken'
      ])

    },
    methods: {
      showNav() {
        if (this.token != false){
          this.token = true
        }
        else{
          this.token = false
        }
        
        if(this.showSidebar) {
          this.showLink = false;
          setTimeout(() => {
            document.getElementsByClassName('search-box')[0].style.display = 'block';
            this.showSidebar = false;
          }, 500);
        }
        else {
          this.showSidebar = true;
          document.getElementsByClassName('search-box')[0].style.display = 'none';
          setTimeout(() => {
            this.showLink = true;
          }, 500);
        }
      },
      // logout(){
      //   alert('LogOut successful')
      //   localStorage.removeItem('token')
      // },
      ...mapActions([
                'logout'
                ])
    }
  }
</script>

<style >
  .container {
  position: fixed;
  top: 0.0rem;
  left: 0;
  /* min-height: calc(100vh - 20px); */
  z-index: 999;
  transition: all 0.4s ease-in-out;
  padding: 12px;

}
.container .control {
  display: flex;
  justify-content: center;
  align-items: center;
  width:30px;
  margin-bottom: 10px;
  position: fixed;


}
.container .control i {
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.container.show {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100vh;
}
.container.show .control > i {
  color: rgb(0, 0, 0);
  transform: rotateZ(-180deg);
}
/* .container.show .navigation-icons {
  color: #fff;
}
.container .navigation-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50px;
  float: left;
}
.container .navigation-icons i {
  font-size: 2rem;
  color:rgba(255,255,255,0.75);
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.container .navigation-icons i:hover {
  color: rgb(85, 85, 85);
} */
.container .navigation-links {
  /* width: 50vh;
  height: 50vh; */
  
  color:#000;
  float: left;
  position:fixed;
  top:3rem;

}

.signIn,.signUp {
  display: inline;
  margin-right: 1rem;
  background-color: rgb(179, 179, 179);
  border:5px;
  padding: 0.25rem 1.25rem 0px 0px;
  transition:0.1s ease-in-out;
  
}
.signUp{
  background-color:rgb(0, 60, 255);
}


.logout:hover{
  color:rgb(0, 60, 255)
}
.container .navigation-links div {
  font-size:2rem;
  padding-left: 10px;
  margin-top:18px;
  margin-bottom: 18px;
  cursor: pointer;
  color: #000;
  
}
.container .navigation-links a{
  color:#000;
}

.container .navigation-links :hover {
  color: rgb(107, 107, 107);
}
#logout {
  background-color: #000;
  color:#fff;
  padding: 0.4rem 1.3rem 0.4rem 1.3rem;

}
#logout:hover{
  color:rgb(0, 60, 255); 
  
}
.fade-enter-active:nth-child(1), .fade-leave-active:nth-child(1) {
  transition: transform linear calc(.1s * 1), display 0.5s;
}
.fade-enter-active:nth-child(2), .fade-leave-active:nth-child(2) {
  transition: transform linear calc(.1s * 2), display 0.5s;
}
.fade-enter-active:nth-child(3), .fade-leave-active:nth-child(3) {
  transition: transform linear calc(.1s * 3), display 0.5s;
}
.fade-enter-active:nth-child(4), .fade-leave-active:nth-child(4) {
  transition: transform linear calc(.1s * 4), display 0.5s;
}
/* .fade-enter-active:nth-child(5), .fade-leave-active:nth-child(5) {
  transition: transform linear calc(.1s * 5), display 0.5s;
} */
.fade-enter-active:nth-child(6), .fade-leave-active:nth-child(3) {
  transition: transform linear calc(.1s * 3), display 0.5s;
}
.fade-enter-active:nth-child(7), .fade-leave-active:nth-child(3) {
  transition: transform linear calc(.1s * 3), display 0.5s;
}

.fade-enter, .fade-leave-to {
  transform: scale(0);
}

</style>