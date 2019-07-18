<template>
  <section>
    <div class="upload-section">
      <el-upload
        ref="upload"
        action="/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :limit="10"
        list-type="picture"
        multiple
        drag
      >
        <div slot="trigger">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </div>
        <div class="upload-btn">
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >上传到服务器</el-button>
        </div>
        <div slot="tip" class="el-upload__tip">可上传任意格式文件</div>
      </el-upload>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
.upload-section {
  width: 600px;
  margin: 10% auto;
}

.upload-btn {
  float: right;
  margin: 60px;
}
</style>
