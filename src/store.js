import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: localStorage.accessToken || null,
        profile: localStorage.profile === undefined ? null : JSON.parse(localStorage.profile),
        loggingIn: false,
        loginError: null,
        fetchingStuff:false,
        fetchingError:null,
        allEvents:null,
      },
      mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
          state.loggingIn = false;
          state.loginError = errorMessage;
        },
        updateAccessToken: (state, accessToken) => {
          state.accessToken = accessToken;
        },
        updateProfile:(state,profile)=>{
            state.profile = profile;
        },
        logout: (state) => {
          state.accessToken = null;
          state.profile = null;
        },
        fetchingStart:state => state.fetchingStuff = true,
        fetchingStop:(state,errorMessage) => {
            state.fetchingStuff = false;
            state.fetchingError = errorMessage;
        },
        updateAllEvents: (state,allEvents) => {
            state.allEvents = allEvents;
        }
    },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');
        console.log("logging in")
      axios.post('https://liveseminar-backend.herokuapp.com/login', {
        ...loginData
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('profile',JSON.stringify(response.data.user));
        // localStorage.setItem('data')
        commit('loginStop', null);
        commit('updateAccessToken', response.data.token);
        commit('updateProfile',response.data.user);
        router.push('/');
      })
      .catch(error => {
        commit('loginStop', error);
        commit('updateAccessToken', null);
      })
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
    logout({ commit }) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
      localStorage.clear()
      commit('logout');
      router.push('/signin');
    },
    fetchingAllEvents({ commit }){
        commit('fetchingStart');

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTk0Y2ZiMWNjYzk1NTAwMTcyOGEyODgiLCJmaXJzdE5hbWUiOiJ0ZXN0MSIsImVtYWlsIjoidGVzdDFAZ21haWwuY29tIiwiaWF0IjoxNTg4NTkwNzk0LCJleHAiOjE2MjAxMjY3OTR9.gy8Okwo4o6Ucpz2_xHDMJSLh5ca1yD_eRCIGeS62YT4");

        var requestOptions = {
        headers: myHeaders
        };

        
        // axios.get('https://liveseminar-backend.herokuapp.com/alleventdetails',{
        //     ...body
        // })
        fetch("https://liveseminar-backend.herokuapp.com/alleventdetails", requestOptions)
        .then(data => {return data.json()})
        .then(response => {
            commit('fetchingStop', null);
            let r =  response
            console.log(r)
            commit('updateAllEvents', r);
        })
          .catch(error => { 
            commit('fetchingStop', error);
            commit('updateAllEvents', null);
          })
    }
    }
})