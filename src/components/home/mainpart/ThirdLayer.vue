<template>
  <div class="home-carousel">
    <el-row>
      <el-col :span="6" :offset="1">
        <el-card
          class="home-carousel-left"
          v-for="staticGraphic in staticGraphics"
          v-bind:key="staticGraphic.id"
        >
          <div>
            <a :href="staticGraphic.linkUrl">
              <el-image :src="staticGraphic.videoCoverUrl" class="static-image"></el-image>
            </a>
            <div class="static-graphic">
              <div>这是推荐：</div>
              <div>{{staticGraphic.title}}</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <div class="home-carousel-right">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="dynamicCarousel in dynamicCarousels" :key="dynamicCarousel.id">
              <h3 class="medium">轮播第{{dynamicCarousel.id}}张</h3>
              <div>{{dynamicCarousel.videoDesc}}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

export default {
  data () {
    return {
      staticGraphics: [],
      dynamicCarousels: []
    }
  },
  created () {
    this.$http.get(UrlConstant.carouselRecommendUrl).then((data) => {
      const carouselRecommend = data.body

      this.staticGraphics = carouselRecommend.staticGraphics
      this.dynamicCarousels = carouselRecommend.dynamicCarousels
    })
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home-carousel {
  margin-top: 20px;
}

.home-carousel-left {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.home-carousel-right {
  width: 660px;
}

.static-graphic {
  margin: 8px 0;
}

.static-image {
  width: 120px;
  height: 120px;
}
</style>
