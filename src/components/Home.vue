<template>
  <div class="home">
      <div class="event-list">
          <div class="card">
              <div class="img">
                  Image
              </div>
              <div class="text-part">
                  <div class="title">
                      Title
                  </div>
                  <div class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, est.
                  </div>
              </div>
          </div>
          <div class="card">
              <div class="img">
                  Image
              </div>
              <div class="text-part">
                  <div class="title">
                      Title
                  </div>
                  <div class="desc">
                      Description
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        document.getElementsByClassName('container')[0].style.display = "block"
        document.getElementsByClassName('navbar')[0].style.display = "block"
        
        
    }

}
</script>


<style>
.home{
    margin:3.5rem 0 0 0;
    padding: 0.75rem;
}
.home .event-list .card{
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
}
@media only screen and (min-width: 600px) {
  .home{
      width:40%;
      justify-content: center;
      margin:3.5rem auto auto auto;
     padding: 0.75rem;
  }
}





</style>