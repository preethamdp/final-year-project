<template>
  <div class="navbar">
      <div class="title-wrap"><router-link to="/">Seminar</router-link></div>
      <div class="search-wrap" @click="expand">
      <div class="search-box" @click="searchFocus">
        <i class="fas fa-search"></i>
        <input type="text" name="" id="search" placeholder="Search" class="search">
         <div class="search-btn">
        <i class="fas fa-search"></i> 
    </div>   
     </div>
     <div class="profile-pic" v-if="profile==null" @click="goProfile">
         <img src="./../assets/logo.png" alt="">
     </div>
     <div class="profile-pic" v-else @click="goProfile">
         <img :src="profile.profilePreviewUrl" alt="">
     </div>
      
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import router from './../router';
export default {
    data:() => {
        return{
            d:true,
        }
    },
    computed:{
        ...mapState([
            'profile'
        ])
    },
    methods:{
        searchFocus(e){
            console.log(e);
            
            document.getElementById('search').focus()
            console.log(document.getElementsByClassName('search-box'))
        },
        expand(){
            if (screen.width < 500){
            document.getElementsByClassName('title-wrap')[0].style.display = 'none'
            document.getElementsByClassName('search-box')[0].style.width = '75%'
            }
        },
        goProfile(){
            router.push('/profile')
        }
    }
}
</script>

<style>
.navbar{
    top:0;
    padding: 4px;
    width:100%;
    background-color:#fff;
    text-align: left;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.5);
    position: fixed;
    z-index: 1;
    height: 3rem;

}
.navbar{
    background: linear-gradient(to right,rgb(146,12,255),rgb(26,46,255))
}
.title-wrap,.search-box,.search-btn,.profile-pic{
    display: inline;
}
.title-wrap{
    position: relative;
    width:40%;
    top:6px;
    margin-left:45px;
    font-size: 24px;
    font-weight: 600;
    color:#000;
    text-shadow: 1px 3px rgba(255,255,255,0.2);
    cursor: pointer;
    
    
}
.title-wrap a{
    color:#000;
    text-decoration: none;
}
.title-wrap a:hover{
    text-shadow: 2px 3px 3px rgba(0,0,0,0.5)
}
.navbar.search-wrap{
    position: relative;
}
.search-box{
    transition: 0.1s ease-in-out;
    width:50%;
    position: absolute;
    height: 2rem;
    right: 7%;
    top: 0.5rem;
    border:3px solid rgb(46, 46, 46) ;
    color:rgb(63, 63, 63);
    /* background-color: rgba(0,0,0,0.1); */
    padding-top:8px;
    padding-left:8px;
    border-radius:2px;
    cursor:text;
   
}
.search-box:hover{
    box-shadow: 2px 2px 2px rgba(0,0,0,0.5)
}
.search-box .search{
    position: absolute;
    top:9px;
    border:none;
    margin-left: 4px;
    outline: none;
    appearance: none;
    font-size:18px;
    width:50%;
    color:#000;
    
}
.search-box:hover{
    border:3px solid rgb(111, 0, 255);
}
.search-box,.search-wrap{
    background-color:#fff
}

.navbar .search-wrap .search-btn{
    position:absolute;
    right:-1px;
    top:0px;
    width:10px;
    padding: 9px 20px 9px 12px;
    background: #000;
    color:#fff;
    cursor: pointer;
}
.navbar .profile-pic{
    display:none;
    position:absolute;
    right:3px;
    top:-1px;
    border-radius: 50%;
    width: 40px;
    cursor:pointer;
    
}
.navbar .profile-pic img:hover{
    border-radius:20%;
}
.navbar .profile-pic img{
    width:40px;
    float:right;
    margin:7px 24px 8px;
    border-radius:50%;
    border:2px solid rgb(231, 231, 231)
}
.navbar .search-btn:hover{
    background: rgb(0, 26, 255);
    
}

@media only screen and (min-width: 1000px) {
 
  .navbar .search-wrap .search-box{
    width:50%;
}
.navbar .title-wrap{
    display: block;
} 
.navbar .profile-pic{
    display:block
}
}

</style>