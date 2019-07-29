<template>
  <section class="info-flow-center">
    <!-- 选择按钮 -->
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
    <!-- 轮播 -->
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
    <!-- 回到顶部 -->
    <Back-top :bottom="80"></Back-top>
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
      carouselHeight1: 600,
      carouselHeight2: 600,
      carouselHeight3: 600
    }
  },
  computed: {
    carouselHeight () {
      if (this.isActice1) {
        return (this.carouselHeight1 + 20) + 'px'
      }
      if (this.isActice2) {
        return (this.carouselHeight2 + 20) + 'px'
      }
      if (this.isActice3) {
        return (this.carouselHeight3 + 20) + 'px'
      }
    }
  },
  methods: {
    showLatestReply () {
      this.$refs.infoFlowCarousel.setActiveItem(0)

      this.isActice1 = true
      this.isActice2 = this.isActice3 = false
    },
    showLatestUpdate () {
      this.$refs.infoFlowCarousel.setActiveItem(1)

      this.isActice2 = true
      this.isActice1 = this.isActice3 = false
    },
    showMostBrowse () {
      this.$refs.infoFlowCarousel.setActiveItem(2)

      this.isActice3 = true
      this.isActice1 = this.isActice2 = false
    },
    changeHeight1 (currentHeight) {
      this.carouselHeight1 = currentHeight
    },
    changeHeight2 (currentHeight) {
      this.carouselHeight2 = currentHeight
    },
    changeHeight3 (currentHeight) {
      this.carouselHeight3 = currentHeight
    }
  }
}
</script>

<style scoped>
.info-flow-center {
  margin: 0 20px;
  flex-direction: column;
  min-width: 524px;
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

/* 子组件共用样式 */
.info-carousel >>> .article-preview {
  background-color: #f3f3f3;
  margin-bottom: 36px;
}

.info-carousel >>> .article-actual {
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 10px 20px;
}

.info-carousel >>> .article-header {
  display: flex;
  background-color: #f8f8f8;
  padding: 10px 5px;
}

.info-carousel >>> .author-picture-show {
  margin-right: 15px;
}

.info-carousel >>> .author-title {
  color: #212529;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.3px;
}

.info-carousel >>> .article-description {
  font-size: 13px;
  margin-top: 3px;
}

.info-carousel >>> .article-content {
  margin-top: 17px;
  min-height: 100px;
  color: #2f2f2f;
}

.info-carousel >>> .article-read-more {
  font-size: 14px;
  width: 100%;
  margin-top: 5px;
  border: 0;
  background-color: #f3eeee;
}
</style>
