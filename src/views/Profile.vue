<template>
<div class="profile-container">
    <Navbar/>
    <Sidebar/>
    <div class="profile">
    <div class="profile-head-part">
        <div class="image-part">
            <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" alt="profile pic">
        </div>
        <div class="text-part">
            <div class="user-id">
               {{ profile.userId }}
            </div>
            <!-- future edit goes here -->
            <div class="follow-details">
                <div class="no-events">
                    {{profile.hosted}} Events
                </div>
                <div class="no-followers">
                    {{profile.followers}} Followers
                </div>
                <div class="no-following">
                    {{profile.following}} Following
                </div>
            </div>
            <div class="profile-name">
                {{profile.firstName}}
            </div>
        </div>
    </div>
    <div class="tab">
  <button class="tablinks" @click="openCity(event, 'London')">Events</button>
  <button class="tablinks" @click="openCity(event, 'Paris')">Saved</button>
</div>

<div id="London" class="tabcontent">
  <!-- <h3>London</h3>
  <p>London is the capital city of England.</p> -->
</div>

<div id="Paris" class="tabcontent">
  <!-- <h3>Paris</h3>
  <p>Paris is the capital of France.</p>  -->
</div>


    </div>
    
    </div>  
</template>

<script>
import {mapState} from 'vuex'
import Navbar from './../components/Navbar.vue'
import Sidebar from './../components/Sidebar.vue'
export default {
        data:()=>{
            return{

            }
        },
        computed:{
            ...mapState([
                'profile'
            ])
        },
        components:{
            Navbar,
            Sidebar
        },
        methods:{
            openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
        }
}
</script>

<style>
.tab {
    margin-top:1rem;
  overflow: hidden;
  border: 1px solid #ccc;
}

/* Style the buttons inside the tab */
.tab button {
  
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  padding-right:20%;
  padding-left:15%;
  background-color: #fff;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
}
#London{
    background-color: #fc4a1a;
}
#Paris{
    background-color: rgb(146,12,255);
}
/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  height: 300px;
}

.profile-container{
   height: 100%;
   overflow-y: hidden;
    

}
.profile{
    margin:2.5rem 0 0 0;
    padding: 2rem;
    text-shadow: 1px 1px rgba(0,0,0,0.2);
    color:#000;
    height: auto;
    width:50%;
    display: block;
    margin: 2.5rem auto;
    background-color: rgb(255, 255, 255);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat:no-repeat;
   
}
.profile-head-part{
    height: 100%;
    width:100%;
    
}
.profile-head-part .image-part img{
   
    height:140px;
    width:auto;
    border-radius:50%;
  
    margin:auto;
    
    box-shadow: 2px 3px rgba(0,0,0,0.2);
}
.profile-head-part .image-part{
    float:left;
    margin:0.75rem 0 0 0.5rem ;
}
.profile-head-part .image-part,.text-part{
    display:inline-block;

}
.profile-head-part .text-part{
    
    padding:0 1rem 1rem 1rem;
    margin:0.75rem 0 1rem 2rem;

}
.profile-head-part .text-part .user-id{
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 3px;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom:0.75rem;
    margin-top:0.5rem;
}
.profile-head-part .text-part .follow-details .no-events,.no-followers,.no-following{
    display:inline-block;
    margin:0rem 0.75rem 0rem 0rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width:fit-content;  

}
.profile-head-part .profile-name{
    margin:0.5rem 0 0 0;
    font-size: 20px;
}
@media only screen and (max-width: 600px) {
    .profile{
        width:auto;
        max-height: 100vh;
       
    }
    .profile-head-part .image-part{
        
        width:100%;
        align-items: center;
        height: auto;
        justify-content: center;
        margin:auto;
        
  }
  .profile-head-part .image-part img{
      height: 250px;
      display: block;
      
  }
  .profile-head-part .text-part {
      height: 100%;
  }
  .tab button{
      margin-right:5px;
  }
}


</style>
