<template>
  <div>
    <div v-for="index in count" :key="index">
      <single-browse></single-browse>
    </div>
    <div class="load-more">
      <Button long v-if="page <= pageCount" @click="loadMore" class="load-btn">点击加载更多</Button>
      <Button long v-else class="load-btn">没有更多了</Button>
    </div>
  </div>
</template>

<script>
import SingleBrowse from './single/SingleBrowse'

export default {
  components: {
    SingleBrowse
  },
  data () {
    return {
      count: 2,
      page: 1,
      pageCount: 3
    }
  },
  methods: {
    loadMore () {
      this.count += 2
      this.page += 1
      this.$emit('changeHeight', this.count)
    }
  }
}
</script>

<style scoped>
.load-more {
  width: 98%;
  margin: 10px auto;
}

.load-btn {
  font-size: 15px;
  font-weight: 600;
}
</style>
