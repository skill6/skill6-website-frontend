<template>
  <div class="top-users">
    <Card>
      <p slot="title">
        <i class="el-icon-document"></i> 访问量最多用户排行榜
      </p>
      <ul>
        <li
          v-for="(mostVisit, index) in mostTenVisit"
          v-bind:key="mostVisit.id"
          class="update-item"
        >
          <span>{{index+1}}.</span>
          <span>{{mostVisit.author}}</span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

export default {
  data () {
    return {
      mostTenVisit: []
    }
  },
  created () {
    this.$http.get(UrlConstant.mostTenVisitUrl).then((data) => {
      this.mostTenVisit = data.body
    })
  }
}
</script>

<style scoped>
.top-users {
  margin-top: 20px;
}
</style>
