<template>
  <div>
    <div class="header-material">
      <el-row>
        <el-col :span="8">
          <div class="info">
            <ul>
              <li>
                <div class="meta-block">
                  <a href="/users/c6264b03b52a/following">
                    <p>0</p>关注
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
              <li>
                <div class="meta-block">
                  <a href="/users/c6264b03b52a/followers">
                    <p>0</p>粉丝
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
              <li>
                <div class="meta-block">
                  <a href>
                    <p>0</p>博文
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
              <li>
                <div class="meta-block">
                  <a href>
                    <p>0</p>提问
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
              <li>
                <div class="meta-block">
                  <a href>
                    <p>0</p>回答
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
              <li>
                <div class="meta-block">
                  <a href>
                    <p>0</p>视频
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
              <li>
                <div class="meta-block">
                  <a href>
                    <p>0</p>文件
                    <i class="iconfont ic-arrow"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-name">
            <h2>何明胜</h2>
          </div>
          <div class="info-row">
            <span class="content">
              <span>全栈工程师</span>
              <span class="split"></span>
              <span>某互联网公司</span>
            </span>
          </div>
          <div class="info-row">
            <span class="content">
              <span>5年行业经验</span>
              <span class="split"></span>
              <span>技术大牛</span>
            </span>
          </div>
          <div class="info-row">
            <span class="content">
              <span>男</span>
              <span class="split"></span>
              <span>18岁</span>
            </span>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="title">
            <div class="block">
              <el-avatar
                shape="square"
                :size="80"
                src="https://www.hemingsheng.cn/imageDownload.hms?imageUrl=20190623/80059000.jpeg"
              ></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.info ul li {
  display: inline-block;
}

.info ul .meta-block {
  font-size: 12px;
  margin: 0 7px 6px 0;
  padding: 0 7px 0 0;
  border-right: 1px solid #f0f0f0;
}

li {
  line-height: 20px;
}

.header-material {
  margin-top: 50px;
}

.info-name {
  display: flex;
  line-height: normal;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  font-size: 1rem;
  line-height: 1.5;
  color: #72777b;
}
</style>
