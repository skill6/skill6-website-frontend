<template>
  <section class="pagination-middle">
    <el-pagination
      background
      :pager-count="7"
      :total="totalCount"
      :page-size="pageSize"
      :current-page="currentPage"
      :hide-on-single-page="true"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handlePageSizeChange"
      @current-change="handleCurrentPageChange"
    ></el-pagination>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      pageSize: this.pageParam.pageSize,
      currentPage: this.pageParam.currentPage,
      totalCount: this.pageParam.totalCount
    }
  },
  props: {
    pageParam: {
      type: Object,
      require: true
    }
  },
  methods: {
    handlePageSizeChange (value) {
      if (value * this.currentPage > this.totalCount) {
        return
      }

      this.pageSize = value
      this.$emit('handlePageSizeChange', this.pageSize, this.currentPage)
    },
    handleCurrentPageChange (value) {
      this.currentPage = value
      this.$emit('handleCurrentPageChange', this.pageSize, this.currentPage)
    }
  }
}
</script>

<style scoped>
.pagination-middle {
  margin: 10px auto;
}
</style>
