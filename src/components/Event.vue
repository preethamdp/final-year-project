<template>
  <div class="card" @click="eventinfo" >
              <div class="img">
                  <img v-bind:src="event.eventPreviewImageUrl" alt="Event Image">
              </div>
              <div class="text-part">
                  <div class="title">
                      {{event.eventName}}
                  </div>
                  <div class="desc">
                      {{event.location}}
                  </div>
              </div>
          </div>
</template>

<script>
import router from './../router.js'
export default {
    props:{
        event:{
            type:Object,
            required:true
        },
      ind:{
          type:Number,
          required:true,
      }
    },
    data:()=>{
        return{
           
        }
    },
    methods:{
        eventinfo(){
            
            router.push('./eventinfo/'+this.ind)
        }
    }

}
</script>

<style>
.card{
    padding:1rem 0 1.25rem 1.25rem;
    margin: auto auto auto auto;
    background: rgb(255, 255, 255);
    position: relative;
    height:100px;
    color:#000;
    widows: 1fr;
    border:1px solid rgba(0,0,0,0.2);
    /* border-radius: 5px; */
   
}
.card .img,.card .text-part{
    display: inline-block;
}
.card .img{
    float: left;
    background-color:#FFF;
    width:100px;
    height: 100px;
    text-align: center;
    /* border:3px solid rgb(0, 0, 0); */
    margin-right:2rem;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    border-radius: 50%
  
    
}
.card .img img{
    width:100px;
    height: 100px;
    border-radius: 50%
}
.card .text-part{
    display: block;
    margin:auto;
    /* text-shadow: 1px 2px 2px rgba(0,0,0,0.2); */
    height:100px;
    width: 60%;
    margin:0 0rem 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card .text-part .title{
   
    font-size: 24px;
    height:40px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card:hover{
    /* background: rgb(146, 12, 255); */
    background:linear-gradient(to top,rgb(146,12,255),rgb(38, 23, 253));
    color:#fff;
}
@media only screen and (max-width: 400px){
    .card .text-part{
        width:50%;
    }
    .card .text-part .title{
   
    font-size: 18px;
    height: 60px;   
    
}
}
</style>