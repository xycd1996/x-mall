<template>
  <header class="store-header">
    <div class="logo">
      <img :src="require('../../assets/images/text-logo.jpg')" width="80" alt="logo">
    </div>
    <div class="store-desc">
      <h1 class="name">
        好吃烤鸭店
        <i class="icon-right"/>
      </h1>
      <span class="label">其他美食</span>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.store-header {
  display: flex;
  align-items: center;
  height: 100px;
  .logo {
    img {
      border-radius: 5px;
    }
  }
  .store-desc {
    margin-left: 8px;
    width: 100%;
    height: 80px;
    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      width: 100%;
      font-size: 22px;
      .icon-right {
        color: #888;
        font-size: 14px;
      }
    }
    .label {
      font-size: 14px;
      color: #888;
    }
  }
}
</style>

