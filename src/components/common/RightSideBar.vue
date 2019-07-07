<template>
  <section class="right-bar">
    <div class="article-search">
      <el-autocomplete
        clearable
        v-model="state2"
        placeholder="请输入内容"
        :maxlength="100"
        show-word-limit
        size="medium"
        :trigger-on-focus="false"
        popper-class="auto-complete"
        :fetch-suggestions="querySearch"
        @select="handleSelect"
      >
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-autocomplete>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      state2: '',
      timeout: 2000,
      restaurants: []
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  },
  methods: {
    querySearch (queryString, callback) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        // 调用 callback 返回建议列表的数据
        callback(results)
      }, 1000 * Math.random())
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' }
      ]
    }
  }
}
</script>

<style scoped>
.right-bar {
  width: 20%;
}

.article-search {
  width: 222px;
}

.auto-complete .li {
  line-height: normal;
  padding: 7px;
}
.auto-complete .name {
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
}

.auto-complete .addr {
  font-size: 12px;
  color: #b4b4b4;
}

.auto-complete .highlighted .addr {
  color: #ddd;
}
</style>
