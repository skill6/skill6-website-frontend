<template>
  <section>
    <div class="editor">
      <mavon-editor v-model="value" />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return { value: '' }
  }
}
</script>

<style scoped>
.editor {
  width: 96%;
  margin: 20px auto;
}
</style>
