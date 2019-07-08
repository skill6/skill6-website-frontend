<template>
  <div>
    <div v-for="index in count" :key="index">
      <single-update></single-update>
    </div>
    <div class="load-more">
      <Button long v-if="page <= page_count" @click="loadMore" class="load-btn">点击加载更多</Button>
      <Button long v-else class="load-btn">没有更多了</Button>
    </div>
  </div>
</template>

<script>
import SingleUpdate from './single/SingleUpdate'

export default {
  components: {
    SingleUpdate
  },
  data () {
    return {
      count: 4,
      page: 1,
      page_count: 3
    }
  },
  methods: {
    loadMore () {
      this.count += 2
      this.page += 1
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
