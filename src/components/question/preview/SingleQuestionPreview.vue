<template>
  <article class="single-question-preview">
    <el-row>
      <el-col :span="20" :offset="1">
        <el-row>
          <el-col :span="16">
            <!-- 标题 -->
            <router-link :to="'/question/' + question.questionId">
              <div class="question-item-title">{{question.questionTitle}}</div>
            </router-link>
          </el-col>
          <el-col :span="6" :offset="1">
            <!-- 提问时间 -->
            <div class="question-item-questioner">
              <a :href="question.authorHome">{{question.questionAuthor}}</a>
              <span>·</span>
              提问于{{question.questionCreateTime}}
            </div>
          </el-col>
        </el-row>
        <!-- 回答 -->
        <router-link :to="'/question/' + question.questionId">
          <div class="question-excerpt">{{question.questionAnswer}}</div>
        </router-link>
        <!-- 提问其他信息 -->
        <div>
          <el-tooltip class="tooltip-item" effect="light" content="点赞" placement="bottom">
            <el-badge :value="200" :max="99">
              <Button shape="circle" icon="md-thumbs-up" size="small"></Button>
            </el-badge>
          </el-tooltip>
          <el-tooltip class="tooltip-item" effect="light" content="反对" placement="bottom">
            <el-badge :value="200" :max="99">
              <Button shape="circle" icon="md-thumbs-down" size="small"></Button>
            </el-badge>
          </el-tooltip>
          <el-tooltip class="tooltip-item" effect="light" content="收藏" placement="bottom">
            <el-badge :value="200" :max="99">
              <el-button type="warning" icon="el-icon-star-off" size="mini" plain circle></el-button>
            </el-badge>
          </el-tooltip>
          <!-- 回答时间 -->
          <span class="author question-item-meta-pr">
            <a :href="question.authorHome">{{question.questionAuthor}}</a>
            <span>·</span>
            回答于{{question.questionCreateTime}}
          </span>
        </div>
      </el-col>
      <el-col :span="2" :offset="1" class="user-header">
        <a :href="'/question/' + question.questionId">
          <el-avatar :size="60" shape="square" :src="question.userHeadUrl" alt="这是头像"></el-avatar>
        </a>
      </el-col>
    </el-row>
  </article>
</template>

<script>
export default {
  props: {
    question: {
      type: Object
    }
  }
}
</script>

<style scoped>
.single-question-preview {
  background-color: #f1f1f1;
  margin-bottom: 36px;
  padding: 0 0 15px 0;
}

.question-item-title {
  margin-top: 15px;
  margin-bottom: 15px;
  color: #212529;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.3px;
}

.question-item-questioner {
  margin-top: 18px;
  margin-bottom: 12px;
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
}

.tooltip-item {
  padding: 5px;
  margin-right: 25px;
}

.question-item-meta-pr {
  margin-left: 30px;
}

.user-header {
  margin-top: 10px;
}
</style>
