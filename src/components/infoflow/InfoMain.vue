<template>
  <section class="info-flow-center">
    <div id="bannerNav">
      <ul>
        <li v-on:click="showLatestReply" :class="{on: isActice1}">
          <span>最新回复</span>
        </li>
        <li v-on:click="showLatestUpdate" :class="{on: isActice2}">
          <span>最新更新</span>
        </li>
        <li v-on:click="showMostBrowse" :class="{on: isActice3}">
          <span>最多访问</span>
        </li>
      </ul>
    </div>
    <div class="info-carousel">
      <el-carousel
        :autoplay="false"
        indicator-position="none"
        arrow="never"
        :initial-index="initialIndex"
        ref="infoFlowCarousel"
        :height="carouselHeight"
      >
        <el-carousel-item>
          <latest-reply v-on:changeHeight="changeHeight1"></latest-reply>
        </el-carousel-item>
        <el-carousel-item>
          <latest-update v-on:changeHeight="changeHeight2"></latest-update>
        </el-carousel-item>
        <el-carousel-item>
          <most-browse v-on:changeHeight="changeHeight3"></most-browse>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script>
import LatestUpdate from './center/LatestUpdate'
import LatestReply from './center/LatestReply'
import MostBrowse from './center/MostBrowse'

export default {
  components: {
    LatestUpdate,
    LatestReply,
    MostBrowse
  },
  data () {
    return {
      initialIndex: 1,
      isActice1: false,
      isActice2: true,
      isActice3: false,
      carouselHeight0: 500,
      carouselHeight1: 500,
      carouselHeight2: 500,
      carouselHeight3: 500
    }
  },
  computed: {
    carouselHeight () {
      return (this.carouselHeight0 + 50) + 'px'
    }
  },
  methods: {
    showLatestReply () {
      this.$refs.infoFlowCarousel.setActiveItem(0)
      this.carouselHeight0 = this.carouselHeight1

      this.isActice1 = true
      this.isActice2 = this.isActice3 = false
    },
    showLatestUpdate () {
      this.$refs.infoFlowCarousel.setActiveItem(1)
      this.carouselHeight0 = this.carouselHeight2

      this.isActice2 = true
      this.isActice1 = this.isActice3 = false
    },
    showMostBrowse () {
      this.$refs.infoFlowCarousel.setActiveItem(2)
      this.carouselHeight0 = this.carouselHeight3

      this.isActice3 = true
      this.isActice1 = this.isActice2 = false
    },
    changeHeight1 (count) {
      this.carouselHeight0 = this.carouselHeight1 = 250 * count
    },
    changeHeight2 (count) {
      this.carouselHeight0 = this.carouselHeight2 = 250 * count
    },
    changeHeight3 (count) {
      this.carouselHeight0 = this.carouselHeight3 = 250 * count
    }
  }
}
</script>

<style scoped>
.info-flow-center {
  margin: 0 20px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 524px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-flex-grow: 1;
  z-index: 1;
}

.info-carousel {
  margin-top: 10px;
}

#bannerNav {
  padding: 1px 1px 10px 1px;
  text-align: center;
}

#bannerNav ul li {
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  margin: 0 2px;
}

#bannerNav ul li span {
  margin: 0 auto;
  display: block;
  width: 66px;
  border-radius: 3px;
  background: #b9cbe4;
  font-size: 10px;
  padding: 2px;
}

#bannerNav ul li.on span,
#bannerNav ul li:hover span {
  background: #00aeff;
}
</style>
