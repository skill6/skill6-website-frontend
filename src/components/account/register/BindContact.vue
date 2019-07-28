<template>
  <div class="bind-contact">
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="绑定邮箱" name="email">
        <el-form
          :model="emailForm"
          ref="emailForm"
          hide-required-asterisk
          label-width="60px"
          class="bind-email"
        >
          <el-form-item
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
          >
            <el-row>
              <el-col :span="15">
                <el-input v-model="emailForm.email"></el-input>
              </el-col>
              <el-col :span="2" :offset="2">
                <el-button size="medium" round @click="sendEmailCode">发送验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="验证码">
            <el-row>
              <el-col :span="8">
                <el-input v-model="emailForm.emailCode"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="绑定手机" name="phone">
        <el-form
          :model="emailForm"
          ref="emailForm"
          hide-required-asterisk
          label-width="60px"
          class="bind-email"
        >
          <el-form-item
            label="手机号"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
          >
            <el-row>
              <el-col :span="15">
                <el-input v-model="emailForm.email"></el-input>
              </el-col>
              <el-col :span="2" :offset="2">
                <el-button size="medium" round @click="sendEmailCode">发送验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="验证码">
            <el-row>
              <el-col :span="8">
                <el-input v-model="emailForm.emailCode"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'email',
      emailForm: {
        email: '',
        emailCode: ''
      }
    }
  },
  methods: {
    handleClick (tab, event) {
    },
    sendEmailCode () {
    }
  }
}
</script>

<style scoped>
.bind-contact {
  width: 500px;
  margin-left: -66px;
}

.bind-email {
  margin-top: 20px;
}
</style>
