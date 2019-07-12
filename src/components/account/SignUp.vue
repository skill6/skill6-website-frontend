<template>
  <div class="singup-section">
    <div class="steps">
      <el-steps :active="active" align-center>
        <el-step title="注册账号（必填）" icon="el-icon-user-solid"></el-step>
        <el-step title="绑定联系方式（可选）" icon="el-icon-mobile-phone"></el-step>
        <el-step title="完善个人资料（可选）" icon="el-icon-document"></el-step>
      </el-steps>
    </div>
    <!-- 中间注册的表格 -->
    <div class="signup-form">
      <register-account v-if="showStep1"></register-account>
      <bind-contact v-if="showStep2"></bind-contact>
      <filling-info v-if="showStep3"></filling-info>
    </div>
    <div>
      <el-row>
        <el-col :span="2" :offset="20">
          <el-button size="medium" type="primary" plain @click="next">下一步</el-button>
        </el-col>
      </el-row>
      <el-row class="skip-btn">
        <el-col :span="2" :offset="20">
          <el-button size="mini" round @click="skip">跳过</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import RegisterAccount from './register/RegisterAccount'
import BindContact from './register/BindContact'
import FillingInfo from './register/FillingInfo'

export default {
  components: {
    RegisterAccount,
    BindContact,
    FillingInfo
  },
  data () {
    return {
      active: 0,
      showStepRegister: true,
      showStepBind: false,
      showStepFill: false
    }
  },
  computed: {
    showStep1 () {
      return this.showStepRegister
    },
    showStep2 () {
      return this.showStepBind
    },
    showStep3 () {
      return this.showStepFill
    }
  },
  methods: {
    next () {
      this.skip()
    },
    skip () {
      if (this.active === 0) {
        this.active++
        this.showStepRegister = false
        this.showStepBind = true
        return
      }
      if (this.active++ === 1) {
        this.showStepBind = false
        this.showStepFill = true
        return
      }

      this.active = 0
      this.showStepRegister = true
      this.showStepFill = false
    }
  }
}
</script>

<style scoped>
.singup-section {
  width: 666px;
  margin: 100px auto;
  background-color: #FFF;
  padding: 10px 20px;
}

.steps {
  margin-top: 20px;
}

.signup-form {
  width: 360px;
  margin: 36px auto;
  min-height: 222px;
}

.skip-btn {
  margin-top: 5px;
}
</style>
