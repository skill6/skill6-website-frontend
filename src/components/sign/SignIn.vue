<template>
  <div class="signin-form">
    <h3 class="sign-title">登录</h3>
    <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="用户名/手机号/邮箱"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <Button type="success" shape="circle" long @click="submitForm('ruleForm')">提交</Button>
        </el-form-item>
      </el-form>
    </div>
    <Divider />
    <!-- 第三方登录 -->
    <div>
      <p class="third-party-sign-text">
        <span>第三方登录</span>
      </p>
      <div class="third-party-sign">
        <a>
          <Icon type="logo-github" size="30" />
        </a>
        <a>
          <Icon type="logo-google" size="30" />
        </a>
        <a>
          <Icon type="md-paw" size="30" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        pass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.signin-form {
  width: 360px;
  margin: 100px auto;
}

.sign-title {
  text-align: center;
  margin-bottom: 25px;
}

.third-party-sign-text {
  text-align: center;
  margin-top: -20px;
  margin-bottom: 20px;
}

.third-party-sign a {
  margin-right: 20px;
}
</style>
