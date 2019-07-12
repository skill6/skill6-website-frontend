<template>
  <div class="modifypwd-section">
    <h2>修改密码</h2>
    <el-form label-position="left" label-width="80px" :model="signupForm" class="modifypwd-form">
      <el-form-item label="旧密码">
        <el-input v-model="signupForm.userName" class="pwd-input"></el-input>
      </el-form-item>
      <el-form-item label="新密码" class="signup-item">
        <el-input v-model="signupForm.password" class="pwd-input"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="signupForm.checkPassword" class="pwd-input"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signupForm: {
        userName: '',
        password: '',
        checkPassword: ''
      },
      active: 0
    }
  }
}
</script>

<style scoped>
.modifypwd-section {
  width: 666px;
  margin: 200px auto;
  background-color: #FFF;
  padding: 30px 20px;
}

.modifypwd-form {
  margin-left: 136px;
}

.pwd-input {
  width: 250px;
}

.signup-item {
  margin-bottom: 10px;
}
</style>
