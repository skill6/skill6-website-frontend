<template>
  <div class="update-dynamic">
    <Card>
      <p slot="title">
        <i class="el-icon-document"></i> 最新博客文章
      </p>
      <ul>
        <li
          v-for="latestPusblish in latestTenPusblish"
          v-bind:key="latestPusblish.id"
          class="update-item"
        >
          <el-row>
            <el-col :span="4" class="update-ellipsis" :title="latestPusblish.author">
              <a href>{{latestPusblish.author}}</a>
            </el-col>
            <el-col :span="4" class="update-ellipsis">发表了</el-col>
            <el-col :span="3" class="update-ellipsis" :title="latestPusblish.type">
              <a href>{{latestPusblish.type}}</a>
            </el-col>
            <el-col :span="9" class="update-ellipsis" :title="latestPusblish.title">
              <a href>《{{latestPusblish.title}}》</a>
            </el-col>
            <el-col :span="4" class="update-ellipsis" :title="latestPusblish.publishTime + '分钟前'">
              <span class="publish-time">{{latestPusblish.publishTime}}分钟前</span>
            </el-col>
          </el-row>
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
      latestTenPusblish: []
    }
  },
  created () {
    this.$http.get(UrlConstant.latestTenPusblishUrl).then((data) => {
      this.latestTenPusblish = data.body
    })
  }
}
</script>

<style scoped>
.update-dynamic {
  margin-top: 20px;
}

.publish-time {
  float: right;
  color: #ffac2d;
}

.update-item {
  font-size: 9px;
  margin-bottom: 6px;
}

.update-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
