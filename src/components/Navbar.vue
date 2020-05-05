<template>
  <div class="navbar">
      <div class="title-wrap">Seminar</div>
      <div class="search-wrap" @click="expand">
      <div class="search-box" @click="searchFocus">
        <i class="fas fa-search"></i>
        <input type="text" name="" id="search" placeholder="Search" class="search">
         <div class="search-btn">
        <i class="fas fa-search"></i>
    </div>   
     </div>
      
        </div>
  </div>
</template>

<script>
export default {
    data:() => {
        return{
            d:true,
        }
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
            document.getElementsByClassName('search-box')[0].style.width = '70%'
            }
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
    box-shadow: 1px 6px rgba(0,0,0,0.5);
    position: fixed;
    z-index: 1;
    height: 3rem;

}
.title-wrap,.search-box,.search-btn{
    display: inline;
}
.title-wrap{
    position: relative;
    width:40%;
    top:10px;
    margin-left:45px;
    font-size: 24px;
    font-weight: 600;
    color:#000;
    text-shadow: 1px 3px rgba(255,255,255,0.2);
}
.navbar.search-wrap{
    position: relative;
}
.search-box{
    transition: 0.1s ease-in-out;
    width:50%;
    position: absolute;
    height: 2rem;
    right: 6%;
    top: 0.5rem;
    border:3px solid rgb(46, 46, 46) ;
    color:rgb(63, 63, 63);
    /* background-color: rgba(0,0,0,0.1); */
    padding-top:8px;
    padding-left:8px;
    border-radius:2px;
    cursor:text;
   
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
    border:3px solid rgb(0, 26, 255);
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
.navbar .search-btn:hover{
    background: rgb(0, 26, 255);
    
}

@media only screen and (min-width: 600px) {
 
  .navbar .search-wrap .search-box{
    width:50%;
}
.navbar .title-wrap{
    display: block;
} 
}

</style>