<template>
  <div>
    <el-form label-position="left" label-width="80px" :model="signupForm">
      <el-form-item label="密码" class="signup-item">
        <el-input v-model="signupForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="signupForm.checkPassword"></el-input>
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
.signup-item {
  margin-bottom: 2px;
}
</style>
