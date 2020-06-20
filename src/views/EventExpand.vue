<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="event-info">
      <div class="event-img" :style="{ backgroundImage: `url(${event.eventImageUrl})` }"></div>
      <div class="event-head">
        <div class="title">{{ event.eventName }}</div>
        <div class="date-location">
          <div class="date">{{moment(event.startDateTime).format('DD-MM-YYYY')}}</div>
          <div class="time">{{moment(event.startDateTime).format('hh:mm A')}}</div>
          <div class="location">{{event.location}}</div>
        </div>
      </div>
      <hr />
      <div class="event-desc">
              <div class="desc">Description</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus voluptatem aliquam provident distinctio, nostrum error. Nulla hic, porro ullam incidunt amet fuga harum? Molestias sed libero consequuntur illum totam a, provident delectus nostrum dolorum excepturi suscipit, vero quibusdam nobis, magni sequi aliquid corporis dicta porro nesciunt iure quis dignissimos.
          </div>
          <hr>
          <div class="event-contact">
              Contact
              <div class="contact">
                  <div class="email">{{profile.email}}
                      <br>{{profile.phno}}
                  </div>
              </div>
              
      </div>
      <!-- <button class="accordion" @click="accord">Description</button>
      <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button class="accordion" @click="accord">Contact</button>
      <div class="panel"> -->
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
      <!-- <div class="email">{{profile.email}}
                      <br>{{profile.phno}}
                  </div>
      </div> -->
    </div>
    <div class="stream" @click="stream">stream</div>
  </div>
</template>

<script>

import Navbar from "./../components/Navbar.vue";
import Sidebar from "./../components/Sidebar.vue";
import router from "./../router.js";
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      event: ""
    };
  },
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapState(["allEvents", "accessToken", "profile"])
  },
  created() {
    this.event = this.allEvents[this.$route.params.id];
  },
  methods: {
    stream() {
      router.push("/test/abc");
    },
    accord(){
        var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
    }
  }
};
</script>

<style>
.accordion {
  background-color:  #fc4a1a;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  margin-bottom: 4px;
  font-weight: 600;
}

.active, .accordion:hover {
  background-color:   rgb(146,12,255); 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
  
}
.event-info {
  display: block;
  width: 50%;
  margin: auto;
  margin-top: 4rem;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
  /* background: linear-gradient(to top,rgb(146,12,255),rgb(38, 23, 253));  */
}
.event-info .event-img {
  width: 100%;
  height: 250px;
  background-image: url("./../assets/blackhole.jpg");
  background-position: center;
  background-size: cover;
  display: block;
  margin: auto;
  margin-top: 1rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.event-info .event-head {
  padding: 1.5rem;
  color: rgb(0, 26, 255);
}
.event-info .event-head .title {
  margin: 0 0 1rem 0;
  font-size: 24px;
  font-weight: 600;
}
.event-info .event-head .date-location {
  display: inline-block;
  font-size: 14px;
  color: #000;
}
.event-head .date-location .date {
  float: left;
  margin-right: 2rem;
}
.event-head .date-location .time {
  float: left;
  margin-right: 2rem;
}
.event-head .date-location .location {
  float: left;
  margin-right: 2rem;
}
.event-desc {
  position: relative;
  top: 10px;
  padding: 1.5rem;
  padding-top: 0;
  font-size: 14px;
}
.event-desc .desc {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.event-contact {
  padding: 1.5rem;
  padding-top: 0;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  top: 10px;
}
.event-contact .email {
  font-size: 14px;
  font-weight: 100;
  margin-top: 8px;
}
.stream {
  display: block;
  margin: auto;
  margin-bottom: 4rem;
  margin-top: 1.5rem;
  width: 30%;
  background: rgb(3, 41, 255);
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.stream:hover {
  opacity: 0.75;
}
@media only screen and (max-width: 800px) {
  .event-info {
    width: 95%;
  }
  .stream {
    width: 60%;
  }
}
</style>