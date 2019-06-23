<template>
  <div class="info-flow-center">
    <div v-for="question in questions" :key="question.questionId">
      <single-question-preview v-bind:question="question"></single-question-preview>
    </div>
  </div>
</template>

<script>
import SingleQuestionPreview from './SingleQuestionPreview'
import Constant from '../../../modules/constant'

export default {
  name: 'QuestionPreview',
  data () {
    return {
      questions: []
    }
  },
  components: {
    SingleQuestionPreview
  },
  created () {
    this.$http.get(Constant.questionsUrl).then((data) => {
      this.questions = data.body.questions
    })
  }
}
</script>

<style scoped>
.info-flow-center {
  margin-left: 20%;
  margin-right: 30px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* min-width: 524px; */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-flex-grow: 1;
  z-index: 1;
  margin-bottom: 100px;
  width: 60%;
}
</style>
