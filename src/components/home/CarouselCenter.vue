<template>
  <div id="carousel">
    <section class="carousel-section">
      <latest-reply></latest-reply>
    </section>
    <section class="carousel-section">
      <latest-update></latest-update>
    </section>
    <section class="carousel-section">
      <most-browse></most-browse>
    </section>
    <!-- 脚部 -->
    <skill6-footer></skill6-footer>
  </div>
</template>

<script>
import $ from 'jquery'

import LatestUpdate from './center/LatestUpdate'
import LatestReply from './center/LatestReply'
import MostBrowse from './center/MostBrowse'
import Skill6Footer from '@/components/navigation/Footer'

(function ($, window, document) {
  var Carousel = function (elem, options) {
    this.defaults = {
      currentDisplay: 1,
      autoPlay: false,
      interval: 3000
    }
    this.opts = $.extend({}, this.defaults, options)

    this.$carousel = elem
    this.$sectionList = this.$carousel.children('section')

    this.carouselNum = this.$sectionList.length
    this.currentDisplay = this.opts.currentDisplay
    this.autoPlay = this.opts.autoPlay
    this.viewWidth = $(window).width() / 2
    this.b_switch = true
    this.iNow = this.opts.currentDisplay
    this.timer = null
    this.interval = this.opts.interval
    // 获取点击元素
    this.$bannerNav = $('#bannerNav').find('ul li')
  }

  Carousel.prototype = {
    // 自动轮播
    play: function () {
      if (this.autoPlay) {
        if (this.iNow === this.carouselNum - 1) {
          this.iNow = 0
        } else {
          this.iNow++
        }

        this.movingNext(this.iNow)
      }
    },

    // 移动到上一个
    movingPrev: function (index) {
      this.currentDisplay = index

      this.initalCarousel()
    },

    // 移动到下一个
    movingNext: function (index) {
      this.currentDisplay = index

      this.initalCarousel()
    },

    // 初始化轮播
    initalCarousel: function () {
      // 全部可见
      this.$sectionList.css({ display: 'block' })

      var self = this
      var halfCarouselNum = Math.floor(this.carouselNum / 2)
      var leftNum, rightNum

      var k = 0
      for (var i = 0; i < halfCarouselNum; i++) {
        leftNum = this.currentDisplay - i - 1
        if (k === 0) {
          this.$sectionList.eq(leftNum).css({
            transform: 'translateX(' + (-330 * (i + 1)) + 'px) translateZ(-120px)',
            width: '15%' // 左边宽度
          }).animate({
            height: 'auto',
            opacity: '0.0' // 左边透明度
          }, 500)
            .css({ display: 'none' })

          rightNum = this.currentDisplay + i + 1
          if (rightNum > this.carouselNum - 1) rightNum -= this.carouselNum
          this.$sectionList.eq(rightNum).css({
            transform: 'translateX(' + (980 * (i + 1)) + 'px) translateZ(-120px) ',
            width: '15%' // 右边宽度
          }).animate({
            height: 'auto',
            opacity: '0.0' // 右边透明度
          }, 500)
            .css({ display: 'none' })
          k++
        } else {
          this.$sectionList.eq(leftNum).css({
            transform: 'translateX(0px) translateZ(-1000px) ',
            zIndex: -1
          })

          rightNum = this.currentDisplay + i + 1
          if (rightNum > this.carouselNum - 1) rightNum -= this.carouselNum
          this.$sectionList.eq(rightNum).css({
            transform: 'translateX(0px) translateZ(-1000px) ',
            zIndex: -1
          })
        }
        this.$sectionList.removeClass('on')
        this.$bannerNav.removeClass('on')
      }

      this.$sectionList.eq(this.currentDisplay).css({
        transform: 'none',
        zIndex: 99999,
        width: '100%' // 中间宽度
      }).animate({
        height: 'auto',
        opacity: '1'
      }, 500).addClass('on').css({ display: 'block' })
      this.$bannerNav.eq(this.currentDisplay).addClass('on')

      this.$carousel.on('webkitTransitionEnd', function () {
        self.b_switch = true
      })
    },

    // 初始化轮播组件
    inital: function () {
      var self = this
      this.initalCarousel()

      this.$bannerNav.on('click', function (ev) {
        if (self.b_switch && !$(this).hasClass('on')) {
          self.iNow = $(this).index()
          self.b_switch = false

          var direction = self.viewWidth < ev.clientX ? 'next' : 'prev'
          var index = $(this).index()

          if (direction === 'next') {
            self.movingNext(index)
          } else {
            self.movingPrev(index)
          }
        }
      }).hover(function () {
        clearInterval(self.timer)
      }, function () {
        self.timer = setInterval(function () {
          self.play()
        }, self.interval)
      })

      this.timer = setInterval(function () {
        self.play()
      }, this.interval)

      this.$carousel.on('selectstart', function () {
        return false
      })
    },

    constructor: Carousel
  }

  $.fn.carousel = function (options) {
    var carousel = new Carousel(this, options)

    return carousel.inital()
  }
})($, window, document)

export default {
  name: 'Carousel',
  components: {
    LatestReply,
    LatestUpdate,
    MostBrowse,
    Skill6Footer
  }
}
</script>

<style>
#carousel {
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
  perspective: 800px;
  height: -webkit-fill-available;
}

.carousel-section {
  position: absolute;
  transition: transform 0.5s ease-in-out;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 500px;
  border-radius: 10px;
  opacity: 0;
  vertical-align: top;
  border: 0;
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

#bannerNav ul li a {
  margin: 0 auto;
  display: block;
  width: 66px;
  border-radius: 3px;
  background: #b9cbe4;
  font-size: 10px;
  padding: 2px;
}

#bannerNav ul li.on a,
#bannerNav ul li:hover a {
  background: #00aeff;
}
</style>
