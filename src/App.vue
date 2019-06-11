<template>
  <div class="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@components/tab-bar/tab-bar';
export default {
  components: {
    TabBar
  }
}
</script>
<style lang="scss" scoped>
.app {
  margin-bottom: 56px;
}
</style>
