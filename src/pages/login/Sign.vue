<template>
  <div id="sign">
    <router-link to="/signup">Go to Foo</router-link>
    <router-link to="/signin">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Sign'
}
</script>

<style scoped>
</style>
