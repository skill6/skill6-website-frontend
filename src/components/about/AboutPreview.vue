<template>
  <div class="clearfix">
    <div class="left-menu">
      <Anchor :offset-top="50" show-ink>
        <AnchorLink href="#about" title="关于我们" />
        <AnchorLink href="#reward" title="赞赏支持" />
        <AnchorLink href="#version" title="版本更新" />
        <AnchorLink href="#contact" title="联系我们" />
      </Anchor>
    </div>
    <div class="about-wrap">
      <!-- 关于我们 -->
      <div class="about-content">
        <div id="about" class="menu-wrap">
          <h1 class="title">
            <strong>关于我们</strong>
          </h1>
          <div>
            <p class="about-title">
              <strong>
                <span class="about-title-span">skill6.&nbsp;技术流,技术牛. —— 专注技术分享!</span>
              </strong>
            </p>
            <span>
              <strong></strong>
              <strong>开发者：何明胜.</strong>
            </span>
            <div>
              <p>通过博客文章、提问答疑、文件分享等，为各位渴望学习和分享技术的朋友提供一个良好的平台。</p>
              <p>截至2019年7月3日，本站累计注册会员12345位。</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 赞赏支持 -->
      <div class="about-content">
        <div id="reward" class="menu-wrap">
          <h1 class="title">
            <strong>赞赏支持</strong>
          </h1>
          <div class="about-desc">
            <p>如果觉得本站对你有所帮助，可以打赏支持。</p>
          </div>
          <el-row>
            <el-col :span="8" :offset="2">
              <img src="/static/images/money/ali_pay.jpg" alt="支付宝赞助" class="reward" />
            </el-col>
            <el-col :span="8" :offset="2">
              <img src="/static/images/money/wechat_pay.jpg" alt="微信赞助" class="reward" />
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 版本更新历史 -->
      <div class="about-content">
        <div id="version" class="menu-wrap">
          <h1 class="title">
            <strong>版本更新历史</strong>
          </h1>
          <div class="about-desc">
            <div class="block">
              <div class="radio">
                <el-radio-group v-model="reverse">
                  <el-radio :label="true">时间逆序</el-radio>
                  <el-radio :label="false">时间顺序</el-radio>
                </el-radio-group>
              </div>
              <el-timeline :reverse="reverse">
                <el-timeline-item
                  v-for="(activity, index) in versionUpdate"
                  :key="index"
                  :timestamp="activity.timestamp"
                  type="primary"
                  placement="top"
                >
                  <el-card>
                    <h4>{{activity.title}}</h4>
                    <div class="content">
                      <p>{{activity.content}}</p>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="about-content">
        <div id="contact" class="menu-wrap">
          <h1 class="title">
            <strong>联系我们</strong>
          </h1>
          <div class="about-desc">
            <p>
              <strong>官方QQ群</strong>
            </p>
            <ul>
              <li>
                Java全栈开发交流群
                <a
                  target="_blank"
                  href="//shang.qq.com/wpa/qunwpa?idkey=b33b5c130237585b90bd1bfb96dc91064d1f5570ac1c4f8e7fc33d4697dbcc11"
                >
                  <img
                    border="0"
                    src="//pub.idqqimg.com/wpa/images/group.png"
                    alt="Java全栈开发学习交流"
                    title="Java全栈开发学习交流"
                  />
                </a>
              </li>
            </ul>
            <p>
              <strong>联系站长</strong>
            </p>
            <ul>
              <li style="text-transform: lowercase">邮箱：husen@skill6.cn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UrlConstant from '../../api/constant'

export default {
  data () {
    return {
      reverse: true,
      versionUpdate: []
    }
  },
  created () {
    this.$http.get(UrlConstant.versionUpdateUrl).then((data) => {
      this.versionUpdate = data.body
    })
  }
}
</script>

<style scoped>
.clearfix {
  width: 80%;
  margin: 0 auto;
}

/* 左边菜单 */
.left-menu {
  float: left;
  width: 222px;
}

/* 右边内容 */
.about-wrap {
  float: left;
  position: relative;
  display: block;
  margin-left: 50px;
}

.about-content {
  margin-bottom: 50px;
  font-size: 15px;
  line-height: 25px;
  word-break: break-all;
  word-wrap: break-word;
}

.title {
  position: relative;
  margin: 0;
  line-height: 32px;
  font-size: 20px;
  border-bottom: 2px solid #eee;
}

.title strong {
  border-bottom: 2px solid #409eff;
  display: inline-block;
  position: relative;
  bottom: -2px;
  font-weight: normal;
}

.about-title {
  text-align: center;
  margin-top: 10px;
}

.about-title-span {
  font-size: 20px;
}

.about-desc {
  margin-top: 20px;
}

.reward {
  width: 210px;
  height: 240px;
  border-radius: 4px;
  margin-top: 10px;
}

/* 版本更新历史 */
.radio {
  margin-bottom: 20px;
}

.content {
  margin-top: 10px;
}
</style>
