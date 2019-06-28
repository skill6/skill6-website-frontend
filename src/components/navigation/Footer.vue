<template>
  <footer id="footer" class="text-center" :style="footerStyle">
    <div class="copyright">
      ©2019 &nbsp;
      <a href="https://www.skill6.cn" target="_blank">skill6.cn</a>
      &nbsp;
      <b>技术流</b>&nbsp; | &nbsp;
      <a href="http://www.miibeian.gov.cn" target="_blank">渝ICP备16013250号-4</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
  // data () {
  //   return {
  //     footerStyle: {
  //       marginTop: '3000px'
  //     }
  //   }
  // }
  // },
  // watch: {
  //   '$route' (val) {
  //     if (this.$route.path === '/') {
  //       this.footerStyle.marginTop = '3000px'
  //     } else {
  //       this.footerStyle.marginTop = '30px'
  //     }
  //   }
  // }
}
</script>

<style scoped>
#footer {
  min-height: 50px;
}
</style>
