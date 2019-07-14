<template>
  <article class="question-main">
    <div class="question-body">
      <div class="question-top-header">
        <div class="question-top-header-mb">
          <div class="block-for-right-border">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="post-topheader-info">
                  <div class="question-auhtor-left">
                    <a :href="question.authorHomeUrl">
                      <img
                        class="question-avatar"
                        :src="question.userHeadUrl"
                        :alt="question.questionAuthor"
                      />
                    </a>
                  </div>
                  <div class="question-author-right">
                    <div>
                      <a :href="question.authorHomeUrl">
                        <strong>{{question.questionAuthor}}</strong>
                      </a>
                      <span class="hidden-xs">
                        <button type="button" class="btn btn-xs btn-success code-follow-user">关注作者</button>
                      </span>
                    </div>
                    <span style="display: block">{{question.questionCreateTime}}</span>
                  </div>
                </div>
                <h1 class="question-title">
                  <a href="/a/1190000019516974">{{question.questionTitle}}</a>
                </h1>
                <div class="content__tech hidden-xs">
                  <ul class="question-title-taglist">
                    <li class="tagPopup mb5">
                      <a class="question-title-tag" data-placement="top">
                        <img :src="question.userHeadUrl" />
                        android
                      </a>
                    </li>
                  </ul>
                  <span class="code-title-taglist-span">
                    70 次阅读
                    &nbsp;·&nbsp;
                    读完需要 19 分钟
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="question-content">{{question.questionAnswer}}</div>
      <el-tooltip class="item" effect="dark" content="复制代码" placement="bottom">
        <el-button icon="el-icon-document-copy" size="mini" plain @click="doCopy"></el-button>
      </el-tooltip>
    </div>
    <!-- 底部功能区 -->
    <bottom-bar></bottom-bar>
  </article>
</template>

<script>
import Constant from '../../api/constant'
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
    this.$http.get(Constant.questionUrl).then((data) => {
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
}

.question-top-header-mb {
  margin-bottom: 20px !important;
}

.question-auhtor-left {
  position: absolute;
}

.question-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
}

.question-author-right span {
  color: #999;
}

.question-title {
  font-size: 30px;
  line-height: 42px;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC',
    'WenQuanYi Micro Hei', sans-serif;
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

.question-title-taglist-span {
  color: #999;
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC',
    'Hiragino Sans GB', 'WenQuanYi Micro Hei', 'Microsoft Yahei', sans-serif;
  font-size: 14px;
  line-height: 1.42858;
  margin-left: 10px;
}

.question-content {
  margin-top: 60px;
  line-height: 1.8;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC',
    'WenQuanYi Micro Hei', sans-serif;
}

.post-topheader-info {
  display: table;
}
</style>
