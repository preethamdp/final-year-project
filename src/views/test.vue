<template>
  <div>
    
    
      <div class="split left">
      <div id="roomIDContainer">
        <label for="roomID"></label><input id="roomID" value="abc" v-model="roomID">
        <button @click="onPress">Join/Create room</button>
      </div>

      <!-- <a href="https://96cbc6b2.ngrok.io">https://96cbc6b2.ngrok.io</a> -->
      <br>
      <!-- <p>Console:</p> -->

      <div id="remoteViewContainer"></div>
    </div>


    <div class="split right">
      <video id="localVideo" autoplay></video>
      <!--<video id="remoteVideo" playsinline autoplay></video>-->

    </div>
    </div>

</template>

<script>
  import adapter from 'webrtc-adapter'
  import io from 'socket.io-client'
  

// const constrains = {
//   "audio": true,
//   "video": true,
// };
  export default {
    //   props:{
    //       roomID:{
    //           required:true
    //       }
    //   },
    data() {
      return {
        //   roomID:this.$route.params.roomid,
        roomID:'abc',
          localStream:null,
          pcPeers:{},
          localVideo:null,
          remoteViewContainer:null,
          p:null,
          constrains : {
            "audio": true,
            "video": true,
            },
            socket:null,
        msg: 'Welcome to Your Vue.js App',
        video: '',
        stream: '',
        peerConn:'',
        connecteduser: null,
        configuration: {
          iceServers:[
            {
              urls: "stun:stun.1.google.com:19302",
              
            }
          ]
        }
      }
    },
    sockets:  {
      connect(){
        console.log('socket connect success!');
      }
    },
    components: {
    },
    mounted() {
        // this.socket = io('http://localhost:4443');
        this.socket = io('https://285d9af35561.ngrok.io');
        this.localVideo = document.getElementById("localVideo");
        this.p = document.querySelector("p");
        this.remoteViewContainer = document.getElementById("remoteViewContainer")
        // let localStream;
        
        this.socket.on('connect', async () => await this.getLocalStream());
        this.socket.on('exchange', data => this.exchange(data));
        this.socket.on('leave', socketId => this.leave(socketId));    
      console.log(adapter.browserDetails.browser);
    //  this.onPress()
    //   console.log(io())
    //   this.video = document.querySelector('video');
    //   var constraints = window.constraints = {
    //     audio: false,
    //     video: true
    //   };
    //   navigator.mediaDevices.getUserMedia(constraints).then(this.handleSuccess).catch(this.handleError)
    },
    methods: {
    //   handleSuccess(stream) {
    //     let videoTracks = stream.getVideoTracks();
    //     console.log('using video device:' + videoTracks[0].label);
    //     this.video.srcObject = stream;
    //   },
    //   handleError(error){
    //     console.log('getUserMedia error:' + error.name, error)
    //   },
    // }
    async getLocalStream(){
        console.log('get local stream');
        
        try {
            const stream = await navigator.mediaDevices.getUserMedia(this.constrains);
            
            this.localStream = stream;
            this.localVideo.srcObject = stream;
            this.localVideo.muted = true;
            this.localVideo.onloadedmetadata = async () => {
            try {
                await this.localVideo.play();
            } catch (e) {this.logError(e);}
            };
        } catch (e) {this.logError(e);}
        },
        
        onPress() {
        console.log('you press the buttonnn');
        let roomID = this.roomID;
        
        if (roomID === "") {
            alert('Please enter room ID!');
        } else {
            let roomIDContainer = document.getElementById('roomIDContainer');
            roomIDContainer.parentElement.removeChild(roomIDContainer);
            
            this.join(roomID);
        }
        },
        join(roomID) {
            let onJoin = socketIds => {
                for (const i in socketIds) {
                if (Object.prototype.hasOwnProperty.call(socketIds,i)) {
                    const socketId = socketIds[i];
                    console.log('Socket', socketId);
                    this.createPC(socketId, true);
                }
                }
            };
        this.socket.emit('join', roomID, onJoin);
        },
        createPC(socketId, isOffer) {
            const pc = new RTCPeerConnection(this.configuration);
            console.log('create pc');
            
            this.pcPeers = {
                ...this.pcPeers,
                [socketId]: pc,
            };
            
            this.localStream.getTracks().forEach(track => pc.addTrack(track, this.localStream));
            
            pc.onicecandidate = event => {
                console.log(event , '---  onicecandidate',event);
                
                if (event.candidate) {
                this.socket.emit('exchange', { 'to': socketId, 'candidate': event.candidate });
                }
            };
            
            pc.onnegotiationneeded = async () => {
                console.log('onnegotiationneeded');
                
                if (isOffer) {
                try {
                    const description = await pc.createOffer();
                    await pc.setLocalDescription(description);
                    
                    this.socket.emit('exchange', { 'to': socketId, 'sdp': pc.localDescription });
                } catch (e) {this.logError(e);}
                
                }
            };
            
            pc.oniceconnectionstatechange = event => {
                console.log('oniceconnectionstatechange');
                if (pc.iceConnectionState === 'connected') {
                console.log('connected', event);
                }
            };
            
            pc.onsignalingstatechange = event => {
                console.log('onsignalingstatechange', event);
                console.log('signalingState', pc.signalingState);
            };
            
            pc.ontrack = event => {
                let video = document.createElement('video');
                video.id = "remoteView" + socketId;
                
                video.autoplay = true;
                video.loop = true;
                video.playsinline = true;
                video.load();
                video.controls = true;
                
                let isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
                
                // Check if video isn't playing
                if (!isPlaying) {
                // Doesn't duplicate same stream
                if (video.srcObject !== event.streams[0]) {
                    video.srcObject = event.streams[0];
                    /*localVideo.onloadedmetadata = async () => {
                    try {
                        await video.play();
                    } catch (e) {logError(e);}
                    };*/
                }
                }
                
                // Console on site for webview debug
                // this.p.innerHTML += `<br> is stream active? ${event.streams[0].active}`;
                // this.p.innerHTML += `<br> stream id: ${event.streams[0].id}`;
                console.log(event.streams);
                
                this.playVideo(video);
            };
            
            return pc;
            },
        playVideo(video) {
                this.remoteViewContainer.appendChild(video);
                // this.p.innerHTML += `<br> asdf`;
                setTimeout(() => video.play(), 3000);
                },
    async  exchange(data) {
            console.log(data, " in exchange  ")
            let pc;
            let fromId = data.from;
            
            if (fromId in this.pcPeers) {
                pc = this.pcPeers[fromId];
            } else {
                pc = this.createPC(fromId, false);
            }
            
            if (data.sdp) {
                const remoteOffer = new RTCSessionDescription(data.sdp);
                
                console.log('exchange sdp', data);
                console.log('remoteOffer:\n', remoteOffer);
                
                try {
                await pc.setRemoteDescription(remoteOffer);
                console.log('setRemoteDescription ok');
                
                if (pc.remoteDescription.type === "offer") {
                    const description = await pc.createAnswer();
                    await pc.setLocalDescription(description);
                    
                    console.log('createAnswer:\n', description);
                    this.socket.emit('exchange', { 'to': fromId, 'sdp': pc.localDescription });
                }
                } catch (e) {console.log(e);}
                
            } else {
                console.log('exchange candidate', data);
                
                try {
                await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
                } catch (e) {this.logError(e);}
            }
            },
        leave(socketId) {
                //console.log('leave', socketId);
                
                const peer = this.pcPeers[socketId];
                
                peer.close();
                
                delete this.pcPeers[socketId];
                
                let video = document.getElementById("remoteView" + socketId);
                
                if (video) video.remove();
                },
        logError(error) {
            console.log('\n\n%c START ________________________ Log Error ______________________', ' color: red; font-size: 15px');
            //console.log(error + '\n\n');
            console.log(error.toString() + '\n\n');
            console.trace();
            console.log('%c END __________________________ Log Error ______________________\n\n', 'color: red; font-size: 15px');
            },


  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
    position:absolute;
    right:0;
    top: 0;
}
</style>