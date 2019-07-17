<template>
  <div class="signin-form">
    <h3 class="sign-title">登录</h3>
    <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="用户名/手机号/邮箱"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <Button type="primary" shape="circle" long @click="submitForm">登录</Button>
        </el-form-item>
      </el-form>
    </div>
    <Divider />
    <div class="second-operate">
      <router-link to="/retrievepwd">找回密码</router-link>
      <router-link to="/signup" class="register">注册账号</router-link>
      <el-link type="primary" :underline="false" class="quict-sign">验证码快速登录</el-link>
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
        <a>
          <el-image src="/static/images/thirdauth/qq_login.png" :lazy="true" class="qq-login"></el-image>
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
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名/手机号/邮箱', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store.commit('setToken', 'true')
          window.location.href = '/'
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
  background-color: #fff;
  padding: 10px 20px;
}

.sign-title {
  text-align: center;
  margin-bottom: 25px;
}

.second-operate {
  margin-top: -20px;
}

.retrieve-password {
  margin-left: 25px;
}

.register {
  margin-left: 10px;
}

.quict-sign {
  float: right;
  margin-right: 5px;
}

.third-party-sign-text {
  text-align: center;
  margin-top: -20px;
  margin-bottom: 20px;
}

.third-party-sign {
  width: fit-content;
  margin: auto;
}

.third-party-sign a {
  margin-right: 30px;
}

.qq-login {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>
