<template>
  <article class="question-main">
    <div class="question-body">
      <!-- 问题 -->
      <div class="question-top-header">
        <!-- 问题头部 -->
        <div class="post-topheader-info">
          <div class="question-auhtor-left">
            <a :href="question.authorHomeUrl">
              <el-avatar :size="40" :src="question.userHeadUrl" alt="这是头像"></el-avatar>
            </a>
          </div>
          <div class="question-author-right">
            <div>
              <a :href="question.authorHomeUrl" class="question-author">
                <strong>{{question.questionAuthor}}</strong>
              </a>
              <button type="button" class="btn btn-xs btn-success code-follow-user">关注作者</button>
            </div>
            <span>提问于 {{question.questionCreateTime}}</span>
          </div>
        </div>
        <div class="question-title">{{question.questionTitle}}</div>
        <!-- 提问其他信息 -->
        <div>
          <ul class="question-title-taglist">
            <li class="tagPopup mb5">
              <a class="question-title-tag">
                <img :src="question.userHeadUrl" />
                android
              </a>
            </li>
          </ul>
          <span>
            70 次阅读
            &nbsp;·&nbsp;
            读完需要 19 分钟
          </span>
        </div>
      </div>
      <!-- 回答列表 -->
      <div class="question-content">{{question.questionAnswer}}</div>
      <el-tooltip class="item" effect="dark" content="复制代码" placement="bottom">
        <el-button icon="el-icon-document-copy" size="mini" plain @click="doCopy"></el-button>
      </el-tooltip>
    </div>
    <!-- 底部功能区 -->
    <div class="question-body">
      <bottom-bar></bottom-bar>
    </div>
  </article>
</template>

<script>
import UrlConstant from '../../api/constant'
import BottomBar from '../common/BottomBar'

export default {
  components: {
    BottomBar
  },
  data () {
    return {
      question: []
    }
  },
  created () {
    this.$http.get(UrlConstant.questionUrl).then((data) => {
      this.question = data.body
    })
  },
  methods: {
    doCopy () { // this.clidata是要复制的动态数据
      this.$copyText(this.buildCopyContent()).then(() => {
        console.log(this.question.questionAnswer)
      }, () => {
        console.log('复制失败')
      }
      )
    },
    buildCopyContent () {
      return this.question.questionAnswer +
        '\n作者：' + this.question.questionAuthor +
        '\n链接：' + window.location.href +
        '\n来源：技术流' +
        '\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
    }
  }

}
</script>

<style scoped>
.question-main {
  position: relative;
  margin-top: 15px !important;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 1140px;
}

.question-body {
  width: 75%;
}

.question-top-header {
  padding: 15px 0 0 0;
  margin-bottom: 20px !important;
}

.question-auhtor-left {
  position: absolute;
}

.question-author {
  font-size: 17px;
}

.question-author-right {
  float: right;
  padding-left: 50px;
  width: 100%;
}

.code-follow-user {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  margin-left: 10px;
}

.question-author-right span {
  color: #999;
}

.question-title {
  font-size: 30px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.question-title-tag {
  padding: 0 6px;
  color: #017e66;
  background-color: rgba(1, 126, 102, 0.08);
  height: 22px;
  line-height: 22px;
  font-weight: normal;
  font-size: 13px;
  text-align: center;
}

.question-title-taglist {
  display: inline-block;
}

.question-title-tag img {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-top: -1px;
  vertical-align: middle;
}

.question-content {
  margin-top: 60px;
  font-size: 15px;
}
</style>
