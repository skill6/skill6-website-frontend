<template>
  <div class="active-users">
    <Card>
      <p slot="title">
        <i class="el-icon-document"></i> 活跃用户
      </p>
      <el-row :gutter="10">
        <el-col
          :span="6"
          v-for="mostActive in mostTenActive"
          :key="mostActive.id"
          class="active-user-card"
        >
          <a href="/">
            <el-image
              src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
              fit="fill"
            ></el-image>
          </a>
          <span>{{mostActive.author}}</span>
        </el-col>
      </el-row>
    </Card>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'

export default {
  data () {
    return {
      mostTenActive: []
    }
  },
  created () {
    this.$http.get(UrlConstant.mostTenActiveUrl).then((data) => {
      this.mostTenActive = data.body
    })
  }
}
</script>

<style scoped>
.active-users {
  margin: 20px 0;
}

.active-user-card {
  margin-bottom: 10px;
}
</style>
