<template>
  <article class="article-preview">
    <div class="question-item">
      <div class="question-item-info">
        <a
          :href="'/question/' + question.questionId"
          class="question-img"
          :style="{backgroundImage:'url(' + question.userHeadUrl + ')'}"
        ></a>
        <router-link :to="'/question/' + question.questionId" class="author-title">
          <div class="question-item-title">
            <h4 class="question-title">{{question.questionTitle}}</h4>
          </div>
          <div class="question-excerpt">{{question.questionAnswer}}</div>
        </router-link>
        <div>
          <span>
            <span class="wrap">
              <i class="fa fa-thumbs-up"></i>
            </span>
            <span class="votes-num">{{question.thumbsUpCount}}</span>
            <span class="votes-word">赞</span>
          </span>
          <span class="bookmark-operation question-item-meta-pr">
            <i class="fa-bookmark question-item-meta-pr"></i>
            <span class="bookmark-word">收藏</span>
          </span>
          <span class="author question-item-meta-pr">
            <a :href="question.authorHome">{{question.questionAuthor}}</a>
            <span class="dot">·</span>
            {{question.questionCreateTime}}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SingleQuestionPreview',
  props: ['question']
}
</script>

<style scoped>
.question-item {
  margin-top: 15px;
}

.question-item-info {
  padding: 0 0 15px 0;
  color: #9e9e9e;
  font-size: 14px;
}

.question-img {
  width: 80px;
  height: 60px;
  border-radius: 4px;
  float: right;
  margin-left: 30px;
  margin-top: 10px;
  background-size: cover;
  background-position: center;
}

.question-item-title {
  margin-top: 5px !important;
  margin-bottom: 5px !important;
}

.question-title {
  display: inline;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #212121;
  position: relative;
  vertical-align: middle;
}

.question-excerpt {
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  color: #888;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
}

.question-item-meta-pr {
  padding-right: 20px !important;
}
</style>
