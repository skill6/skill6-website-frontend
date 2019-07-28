<template>
  <section class="player-container">
    <div>
      <video-player
        class="vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied"
      ></video-player>
    </div>
    <!-- 底部功能区 -->
    <bottom-bar></bottom-bar>
  </section>
</template>

<script>
import 'vue-video-player/src/custom-theme.css'

import UrlConstant from '../../api/constant'
import BottomBar from '../common/BottomBar'

export default {
  components: {
    BottomBar
  },
  data () {
    return {
      video: {},
      // videojs options
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放
        controls: true, // 控制条
        preload: 'auto', // 视频预加载
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        language: 'zh-CN',
        height: '360',
        width: document.documentElement.clientWidth,
        sources: [{
          type: 'video/mp4',
          src: ''
        }],
        poster: ''
      }
    }
  },
  beforeCreate () {
    this.$http.get(UrlConstant.videoUrl).then((data) => {
      this.video = data.body

      this.playerOptions.sources[0].src = this.video.videoContentUrl
      this.playerOptions.poster = this.video.videoPoster
    })
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
      console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      console.log('example 01: the player is readied', player)
    }
  }
}
</script>

<style scoped>
.player-container {
  width: 750px;
  margin: 0px auto;
}

.video-player {
  cursor: pointer;
}

/* 播放器播放按钮样式 */
.video-js .vjs-big-play-button {
  height: 2em;
  width: 2em;
  line-height: 2em;
  border-radius: 1em;
  border: 0;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  margin-left: -1em;
}

.video-js .vjs-big-play-button:hover,
.vjs-custom-skin .video-js:hover .vjs-big-play-button {
  background-color: #ff0000;
  transition: all 0.3s;
}

.video-js .vjs-control:focus:before,
.video-js .vjs-control:hover:before,
.video-js .vjs-control:focus {
  outline: none;
}

.vjs-custom-skin > .video-js .vjs-play-progress,
.vjs-custom-skin > .video-js .vjs-volume-level {
  background-color: #ff0000;
}
</style>
