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
                Slim_shady
            </div>
            <!-- future edit goes here -->
            <div class="follow-details">
                <div class="no-events">
                    10 Events
                </div>
                <div class="no-followers">
                    12 Followers
                </div>
                <div class="no-following">
                    23 Following
                </div>
            </div>
            <div class="profile-name">
                moms sphagetti
            </div>
        </div>
    </div>

    </div>
    <Footer pos=false />
    </div>  
</template>

<script>
import Navbar from './../components/Navbar.vue'
import Sidebar from './../components/Sidebar.vue'
import Footer from './../components/Footer.vue'
export default {
        data:()=>{
            return{

            }
        },
        components:{
            Navbar,
            Sidebar,
            Footer
        }
}
</script>

<style>

.profile-container{
   height: auto;
   overflow-y: hidden;
    

}
.profile{
    margin:2.5rem 0 0 0;
    padding: 2rem;
    text-shadow: 1px 1px rgba(0,0,0,0.2);
    color:#000;
    height: 100%;
    width:50%;
    display: block;
    margin: 2.5rem auto;
    background-color: #fff;
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
    display:inline;
    margin:0rem 0.75rem 0rem 0rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.profile-head-part .profile-name{
    margin:0.5rem 0 0 0;
    font-size: 20px;
}
@media only screen and (max-width: 600px) {
    .profile{
        width:auto;
        min-height: 90vh;
       
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
}


</style>
