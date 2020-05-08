<template>
  <div class="card">
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
export default {
    props:{
        event:{
            type:Object,
            required:true
        }
    },
    data:()=>{
        return{
            data:event
        }
    }

}
</script>

<style>
.card{
    padding:1rem 0 1.25rem 1.25rem;
    margin: auto auto 1rem auto;
    background: rgb(255, 255, 255);
    position: relative;
    height:100px;
    widows: 1fr;
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
    border:3px solid rgb(0, 0, 0);
    margin-right:2rem;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
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
    text-shadow: 1px 2px 2px rgba(0,0,0,0.2);
    height:100px;
    width: 60%;
    margin:0 0rem 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card .text-part .title{
   
    font-size: 28px;
    height:50px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card:hover{
    background: #000
}
</style>