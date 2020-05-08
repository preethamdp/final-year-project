<template>
    
  <div class="signin" >
      <div v-if="loggingIn" class="loading">
      <img src="./../assets/loading1.gif" alt="Loading Icon">
    </div>
        <div v-if="loginError">{{loginError}}</div>
      <div class="checker"  v-if="accessToken == null">
      <div class="part1">
          <div class="title">
              Seminar
          </div>
          <div class="signin-text">
              Sign in
          </div>
          <div class="new-user">
              <span class="text">New user? </span><a href="./components/signin.vue" class="create-link">Create an account</a>
          </div>
      </div>
      <div class="email-text" >
          <input type="email" name="" placeholder = "Email address" id="email" v-model="email">
          <input type="password" name="" placeholder = "Password" id="pwd" @keypress="handleEnter" v-model="password">
      </div>
      <div class="continue-btn" @click="loginSubmit">
          Continue
      </div>
      <div class="part2">
          <div class = "or">or</div>
        <div class="google">
            <!-- <i class="fas fa-google" aria-hidden="true"></i> -->
            Continue with Google
        </div>
        <div class="fb">
            <!-- <i class="fa fa-facebook"></i> -->
            Continue with Facebook
        </div>
      </div>
     </div>
     <div class="already-signin" v-else >
         <div class="already-text">
             Signin complete
         </div>
     </div>
     </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data:()=>{
        return{
            email:'',
            password:'',
            shownav: true,
            auth : false,
            showAlert: false
        }

    },
    computed:{
    //     getToken:()=>{
    //     return localStorage.token
    // }
        ...mapState([
        'loggingIn',
        'loginError',
        'accessToken'
      ])
    },
    methods:{
        login(){
            let username = document.getElementById('email')
            let pwd = document.getElementById('pwd')        
            
            fetch("https://liveseminar-backend.herokuapp.com/login", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                email: username.value.trim(),
                password: pwd.value
            })
            })
            .then(response => {
                if (!response.ok) {
                throw Error(response.statusText);
                }
                return response;})
            .then(data => {return data.json()})
            .then(res => {this.token = res['token'];this.auth = true;return res})
            .then(res => {localStorage.token = res['token'];localStorage.full = res;this.$router.push({path:'about'})})
            .catch(err => console.log(err));
            
          
        
            // if (!this.auth){
            //     this.$router.push({path:'about'})
            //     console.log(this.token);
                
            // }
            // pwd.value = ''
            },
            handleEnter(e){
                
                if (e == "Enter"){
                    console.log('enter');
                    
                    this.login()
                }
            },
            goHome(){
                this.$route.push({path:'about'})
            },
            ...mapActions([
                'doLogin'
                ]),
            loginSubmit() {
                this.doLogin({
                email: this.email,
                password: this.password
                });
             }


                },
    //  mounted(){         
    //      if(localStorage.token == undefined){
    //      this.token = ''
    //      }
    //      else{
    //          this.token = localStorage.token
    //      }
    //     console.log('mounting');
        
    //      let tmp = 'none'
    //     document.getElementsByClassName('container')[0].style.display = tmp
    //     document.getElementsByClassName('navbar')[0].style.display = tmp
        
    // }


}
</script>

<style>
body{
    overflow: hidden;
}
.signin{
padding: 1rem;
z-index:0;
position: relative;
}
.signin .part1 .title{
    color:rgb(26, 26, 26);
    font-size: 18px;
    font-weight: 300;
    margin: 28px 0px 0px 0px;
    opacity: 0.9;
}
.signin .part1 .signin-text{
    color:#000;
    font-size:48px;
    margin:0px 0px 4px 0px;

}
.signin .part1 .new-user .text{
    color:#000;
    opacity: 0.8;
}
.signin .part1 .new-user a{
    color:rgb(0, 17, 255);
}
.signin .email-text{
    margin:3rem 0 1rem 0;
    
}
.signin .email-text input{
    width:100%;
    border:none;
    outline:none;
    appearance: none;
    color:rgb(0, 0, 0);
    font-size: 16px;
    background-color:#FFF;
    border-bottom: 2px solid rgb(0, 0, 0);
    padding: 0 0 6px 0;
    margin:0 0 1.75rem 0 ;
}
.signin .continue-btn{
    padding:3px 24px 3px 24px;
    width:fit-content;
    color:#FFF;
    float:right;
    background-color:rgb(0, 26, 255);
    border:none;
    border-radius:20px;
    font-size: 18px;
    cursor: pointer;
}
.signin .continue-btn:hover{
    background-color:#000;
}
.signin .horz-line {
    margin:6rem 0 0 0;
    color: #000;
}
.signin .part2{
    margin:6rem 0 0 0;
}
.signin .part2 .or{
    text-align: center;
    font-style: oblique;
    color: rgb(63, 63, 63);
}
.signin .part2 .google{
    margin:1rem 0 0 0;
    text-align: center;
    background-color:#000;
    color: #FFF;
    justify-content: center;
    align-items: center;
    width:fit-content;
    margin:1rem auto;
    padding: 8px 24px 8px 24px;
    border-radius:34px;
    font-size: 18px;
    width:200px;
    cursor: pointer;
    /* box-shadow: 1px 2px rgba(0,0,0,0.5) */
    
}
.signin .part2 .fb{
    margin:1rem 0 0 0;
    text-align: center;
    background-color:rgb(0, 26, 255);
    color: #FFF;
    justify-content: center;
    align-items: center;
    width:fit-content;
    margin:1rem auto;
    padding: 8px 24px 8px 24px;
    border-radius:34px;
    font-size: 18px;
    width:200px;
    cursor: pointer;
    /* box-shadow: 1px 2px rgba(0,0,0,0.5) */
    
}
.signin .part2 .google:hover{
    color:rgb(0, 26, 255)
}
.signin .part2 .fb:hover{
    color:#000
}

.already-signin .already-text{
    width:fit-content;
    background-color: rgb(0, 26, 255);
    color:#FFF;
    font-size: 32px;
    padding: 1rem;
    transform: skew(-10deg);
    align-items: center;
    margin: auto;
    margin-top:30%;
    border:4px solid #fff;
    text-shadow: 1px 2px rgba(0,0,0,0.5)
}
.signin .loading img{
    position:absolute;
    width:100%;
    height: 100%;
}

@media only screen and (min-width: 600px) {
  .signin{
      width:40%;
      justify-content: center;
      margin:auto;
  }
}


</style>