<template>
  <div class="retrievepwd-section">
    <div class="steps">
      <Steps :current="current">
        <Step title="验证联系方式"></Step>
        <Step title="重新设置密码"></Step>
      </Steps>
    </div>
    <div class="retrieve-form">
      <verify-contact v-if="showStep1"></verify-contact>
      <set-password v-else></set-password>
    </div>
    <div>
      <el-row>
        <el-col :span="5">
          <el-link type="primary">人工申请找回密码</el-link>
        </el-col>
        <el-col :span="2" :offset="16">
          <el-button size="medium" type="primary" plain @click="next">下一步</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import VerifyContact from './retrieve/VerifyContact'
import SetPassword from './retrieve/SetPassword'

export default {
  components: {
    VerifyContact,
    SetPassword
  },
  data () {
    return {
      current: 0,
      showStepVerify: true
    }
  },
  computed: {
    showStep1 () {
      return this.showStepVerify
    }
  },
  methods: {
    next () {
      this.current++
      this.current %= 2

      if (this.current === 0) {
        this.showStepVerify = true
      } else {
        this.showStepVerify = false
      }
    }
  }
}
</script>

<style scoped>
.retrievepwd-section {
  width: 666px;
  margin: 100px auto;
  background-color: #fff;
  padding: 10px 20px;
}

.steps {
  padding: 50px 20px;
  height: 100px;
  width: 520px;
  margin: 0 auto;
}

.retrieve-form {
  width: 360px;
  margin: 36px auto;
  min-height: 222px;
}
</style>
