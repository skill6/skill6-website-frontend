<template>
  <div class="question-container">
    <section class="info-flow-center">
      <el-row>
        <el-col :span="3" :offset="19">
          <a target="_blank" href="/profile/publish/question">
            <el-button
              type="primary"
              plain
              icon="el-icon-question"
              :loading="questionBtnLoading"
              @click="questionBtnClick"
            >我要提问</el-button>
          </a>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div v-for="question in questions" :key="question.questionId">
        <single-question-preview v-bind:question="question"></single-question-preview>
      </div>
      <pagination
        v-bind:pageParam="pageParam"
        @handlePageSizeChange="handlePageSizeChange"
        @handleCurrentPageChange="handleCurrentPageChange"
      ></pagination>
    </section>
    <!-- 右边栏 -->
    <right-side-bar></right-side-bar>
  </div>
</template>

<script>
import UrlConstant from '../../../api/constant'
import Pagination from '../../common/Pagination'

import SingleQuestionPreview from './SingleQuestionPreview'
import RightSideBar from '../../common/RightSideBar'

export default {
  components: {
    SingleQuestionPreview,
    RightSideBar,
    Pagination
  },
  data () {
    return {
      questions: [],
      pageParam: {},
      questionBtnLoading: false
    }
  },
  created () {
    this.$http.get(UrlConstant.questionsUrl).then((data) => {
      this.questions = data.body.questions
    })
    this.pageParam = {
      pageSize: 10,
      currentPage: 1,
      totalCount: 1000
    }
  },
  methods: {
    handlePageSizeChange (pageSize, currentPage) {
      console.log(`1 每页 ${pageSize} 条, 第${currentPage}页`)
    },
    handleCurrentPageChange (pageSize, currentPage) {
      console.log(`2每页 ${pageSize} 条, 第${currentPage}页`)
    },
    questionBtnClick () {
      this.questionBtnLoading = true
      setTimeout(() => {
        this.questionBtnLoading = false
      }, 500)
    }
  }
}
</script>

<style scoped>
.question-container {
  display: flex;
  margin-bottom: 50px;
}

.info-flow-center {
  margin-left: 20%;
  margin-right: 20px;
  width: 60%;
  float: left;
}
</style>
