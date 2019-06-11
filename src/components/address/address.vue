<template>
  <div class="address">
    <span class="name">道路名称</span>
    <div class="icon">
      <i @click="this.location" class="icon-location_fill"></i>
      <i @click="this.mobile" class="icon-mobile_fill"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    location() {
      console.log('location')
    },
    mobile() {
      console.log('mobile')
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  font-size: 16px;
  color: #555;
  .name {
    vertical-align: top;
  }
  .icon {
    float: right;
    color: #e16531;
    i {
      padding-left: 26px;
    }
  }
}
</style>

