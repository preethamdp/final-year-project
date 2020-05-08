<template>
  <div class="signup">
      <div class="part1">
          <div class="title">
              Seminar
          </div>
          <div class="signup-text">
              Sign up
          </div>
          <div class="user-exist">
              <span class="text">Already have an account? </span><a href="./components/signup.vue" class="create-link">Sign in</a>
          </div>
      </div>
      <div class="email-text">
          <input type="email" name="" placeholder = "Email address" id="">
          <input type="email" name="" placeholder = "First name" id="">
          <input type="email" name="" placeholder = "last name" id="">
          <input type="email" name="" placeholder = "Password" id="">

      </div>
      <div class="continue-btn">
          Continue
      </div>
      
     </div>
</template>

<script>
export default {


}
</script>

<style>
/* .container,.navbar{
    display:none;
} */
body{
    overflow: hidden;
}
.signup{
padding: 1rem;
z-index:0;
position: relative;
}
.signup .part1 .title{
    color:rgb(26, 26, 26);
    font-size: 18px;
    font-weight: 300;
    margin: 28px 0px 0px 0px;
    opacity: 0.9;
}
.signup .part1 .signup-text{
    color:#000;
    font-size:48px;
    margin:0px 0px 4px 0px;

}
.signup .part1 .user-exist .text{
    color:#000;
    opacity: 0.8;
}
.signup .part1 .user-exist a{
    color:rgb(0, 17, 255);
}
.signup .email-text{
    margin:3rem 0 1rem 0;
    
}
.signup .email-text input{
    width:100%;
    border:none;
    outline:none;
    appearance: none;
    color:rgb(0, 0, 0);
    background-color:#fff;
    border-bottom: 2px solid rgb(0, 0, 0);
    padding: 0 0 6px 0;
    margin: 0 0 2.5rem 0;
    font-size: 16px;
    padding: 0 0 0.75rem 0;
}
.signup .continue-btn{
    padding:5px 30px 5px 30px;
    width:fit-content;
    color:#FFF;
    float:right;
    background-color:rgb(0, 26, 255);
    border:none;
    border-radius:20px;
    font-size: 18px;
    cursor: pointer;
}
.signup .continue-btn:hover{
    background-color:#000;
}
.signup .horz-line {
    margin:6rem 0 0 0;
    color: #000;
}
.signup .part2{
    margin:6rem 0 0 0;
}


@media only screen and (min-width: 600px) {
  .signup{
      width:40%;
      justify-content: center;
      margin:auto;
  }
}


</style>