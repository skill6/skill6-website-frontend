<template>
  <div id="banner">
    <div id="carousel">
      <section class="carousel-section">
        <info-left></info-left>
      </section>
      <section class="carousel-section">
        <info-center></info-center>
      </section>
      <section class="carousel-section">
        <info-right></info-right>
      </section>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

import InfoLeft from './section/InfoLeft'
import InfoCenter from './section/InfoCenter'
import InfoRight from './section/InfoRight'

(function ($, window, document) {
  var Carousel = function (elem, options) {
    this.defaults = {
      curDisplay: 0,
      autoPlay: false,
      interval: 3000
    }
    this.opts = $.extend({}, this.defaults, options)

    this.$carousel = elem
    this.$aImg = this.$carousel.children('section')

    this.imgLen = this.$aImg.length
    this.curDisplay = this.opts.curDisplay
    this.autoPlay = this.opts.autoPlay
    this.viewWidth = $(window).width() / 2
    this.b_switch = true
    this.iNow = this.opts.curDisplay
    this.timer = null
    this.interval = this.opts.interval
    // 生成小点点
    var htmlNav = '<ul>'
    for (var i = 0; i < this.imgLen; i++) {
      if (this.curDisplay === i) {
        htmlNav += '<li class=on><a>' + i + '</a></li>'
      } else {
        htmlNav += '<li><a>' + i + '</a></li>'
      }
    }
    htmlNav += '</ul>'
    this.$carousel.parent().append('<div id=bannerNav>' + htmlNav + '</div>')
    this.$aNav = this.$carousel.siblings('#bannerNav').find('ul li')
  }

  var outerWidth = parseInt(document.body.offsetWidth)
  var middleWidth = 1920
  // 中间的高度
  var _height = outerWidth >= middleWidth ? 380 : 300
  // 两边的高度和宽度
  var _slideHeight = outerWidth >= middleWidth ? 330 : 260

  Carousel.prototype = {
    play: function () {
      if (this.autoPlay) {
        if (this.iNow === this.imgLen - 1) {
          this.iNow = 0
        } else {
          this.iNow++
        }

        this.movingNext(this.iNow)
      }
    },

    movingPrev: function (index) {
      this.curDisplay = index

      this.initalCarousel()
    },

    movingNext: function (index) {
      this.curDisplay = index

      this.initalCarousel()
    },

    initalCarousel: function () {
      var self = this
      var halfImgLen = Math.floor(this.imgLen / 2)
      var leftNum, rightNum

      var k = 0
      for (var i = 0; i < halfImgLen; i++) {
        leftNum = this.curDisplay - i - 1
        if (k === 0) {
          this.$aImg.eq(leftNum).css({
            transform: 'translateX(' + (-330 * (i + 1)) + 'px) translateZ(-120px)',
            width: '15%'
          }).animate({
            height: 'auto',
            marginTop: -_slideHeight / 2 + 'px',
            opacity: '0.7'
          }, 500)
          this.$aImg.eq(leftNum).attr('onclick', null)

          rightNum = this.curDisplay + i + 1
          if (rightNum > this.imgLen - 1) rightNum -= this.imgLen
          this.$aImg.eq(rightNum).css({
            transform: 'translateX(' + (980 * (i + 1)) + 'px) translateZ(-120px) ',
            width: '15%'
          }).animate({
            height: 'auto',
            marginTop: -_slideHeight / 2 + 'px',
            opacity: '0.7'
          }, 500)
          this.$aImg.eq(rightNum).attr('onclick', null)
          k++
        } else {
          this.$aImg.eq(leftNum).css({
            transform: 'translateX(0px) translateZ(-1000px) ',
            zIndex: -1
          })

          rightNum = this.curDisplay + i + 1
          if (rightNum > this.imgLen - 1) rightNum -= this.imgLen
          this.$aImg.eq(rightNum).css({
            transform: 'translateX(0px) translateZ(-1000px) ',
            zIndex: -1
          })
        }
        this.$aImg.removeClass('on')
        this.$aNav.removeClass('on')
      }

      var _href = 'location.href=' + "'" + this.$aImg.eq(this.curDisplay).attr('data-url') + "'"
      this.$aImg.eq(this.curDisplay).css({
        transform: 'translateZ(0px)',
        zIndex: 99999,
        width: '60%'
      }).animate({
        height: 'auto',
        marginTop: -_height / 2 + 'px',
        opacity: '1'
      }, 500).addClass('on').attr('onclick', _href)
      this.$aNav.eq(this.curDisplay).addClass('on')

      this.$carousel.on('webkitTransitionEnd', function () {
        self.b_switch = true
      })
    },

    inital: function () {
      var self = this
      this.initalCarousel()

      this.$aImg.on('click', function (ev) {
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
      this.$aNav.on('click', function (ev) {
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
    InfoLeft,
    InfoCenter,
    InfoRight
  }
}
</script>

<style>
#banner {
  margin-bottom: -10px;
}

#carousel {
  position: relative;
  z-index: 2;
  margin-top: 20px;
  transform-style: preserve-3d;
  perspective: 800px;
  height: 400px;
}

.carousel-section {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -420px;
  transition: transform 0.5s ease-in-out;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 500px;
  border-radius: 10px;
  opacity: 0;
  vertical-align: top;
  border: 0;
}

#bannerNav {
  position: relative;
  margin-top: 20px;
  height: 10px;
  padding: 10px 0;
  text-align: center;
}

#bannerNav ul li {
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  width: 22px;
  margin: 0 2px;
}

#bannerNav ul li a {
  margin: 0 auto;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #5e6671;
  font-size: 0;
}

#bannerNav ul li.on a,
#bannerNav ul li:hover a {
  background: #00aeff;
}

#bannerNav ul li.on a {
  width: 20px;
}
</style>
