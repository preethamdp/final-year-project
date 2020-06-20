<template>
    <div class="events-container">
        <Sidebar />
      <Navbar />
  <div class="events">
      
      <div class="loading" v-if="fetchingStuff == true">
          <img src="./../assets/loading1.gif" alt="" srcset="">
      </div>
      <div class="wrapper" v-if="allEvents!=null">
        <div class="event-list"  v-for="(e,index) in allEvents" v-bind:key="index">
          <Event v-bind:event="e" :ind="index" ></Event>
      </div>
      </div>
      
      <!-- {{fetchingError}}
      {{fetchingStuff}}
      {{allEvents}} -->
  </div>
    </div>
</template>

<script>
  import Sidebar from './../components/Sidebar.vue'
  import Navbar from './../components/Navbar.vue'   

import Event from './../components/Event.vue'
import { mapState,mapActions } from 'vuex'
export default {
    components:{
        Event,
        Sidebar,
        Navbar
    },
    computed:{
        ...mapState([
        'fetchingStuff',
        'fetchingError',
        'allEvents',
        'accessToken'
      ])
    },
    created(){
        if(this.allEvents == null){
        this.fetchingAllEvents()
        }
    },
    mounted(){
        document.getElementsByClassName('container')[0].style.display = "block"
        document.getElementsByClassName('navbar')[0].style.display = "block"
        
        
    },
    methods:{
        ...mapActions([
            'fetchingAllEvents'
        ])
    }

}
</script>


<style >
.events-container{
    background-image: url("./../assets/main-bg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.events{
    margin:3.5rem 0 0 0;
    padding: 0.75rem;
    width:100%;
    
}
.events .event-list{
     box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
     cursor: pointer;
     
}
.events .loading img{
    width:100%;
    height:100%;

   
}
/* .home .event-list .card{
    padding:1.25rem 0 1.25rem 1.25rem;
    margin: auto auto 1rem auto;
    background: #000;
    position: relative;
    height:100px;
    widows: 1fr;
}
.home .event-list .card .img{
    display: inline-block;
    position: relative;
    background-color:#FFF;
    width:100px;
    height: 100px;
    text-align: center;
  
    
}
.home .event-list .card .text-part{
    display: block;
    float:right;
    margin:auto;
    height:100px;
    width: 60%;
    margin:0 1rem 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
}
.home .event-list .card .text-part .title{
    font-size: 32px;
}
.home .event-list .card:hover{
    background: #FFF
} */
@media only screen and (min-width: 700px) {
  .events{
      width:50%;
      justify-content: center;
      margin:3.5rem auto auto auto;
     padding: 0.75rem;
  }
}
@media only screen and (max-width: 600px) {
  .events .wrapper{
      position: relative;;
      left: 0;
  }
  .event-list{
      width:95%
  }
}





</style>