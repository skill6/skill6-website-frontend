<template>
  <div>
    <el-form label-position="left" label-width="80px" :model="infoForm">
      <el-form-item label="姓名">
        <el-input v-model="infoForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="infoForm.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="infoForm.sex"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      infoForm: {
        name: '',
        age: '',
        sex: ''
      }
    }
  }
}
</script>
<style scoped>
</style>
