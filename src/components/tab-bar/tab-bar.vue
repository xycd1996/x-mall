<template>
  <footer class="tab-bar">
    <ul>
      <router-link tag="li" :to="{ path: '/home' }" exact>
        <i class="home"></i>
        <div>门店</div>
      </router-link>
      <router-link tag="li" :to="{ path: '/order' }" exact>
        <i class="form"></i>
        <div>订单</div>
      </router-link>
      <router-link tag="li" :to="{ path: '/mine' }" exact>
        <i class="my"></i>
        <div>我的</div>
      </router-link>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #515151;
  border-top: #ddd solid 1px;
  background: #eee;
  z-index: 10;
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    li {
      flex: auto;
      font-size: 14px;
      text-align: center;
      i {
        margin-bottom: 2px;
        display: inline-block;
        width: 30px;
        height: 30px;
      }
      .home {
        background: url("./home_light.svg") no-repeat;
        background-size: 30px 30px;
      }
      .form {
        background: url("./form_light.svg") no-repeat;
        background-size: 30px 30px;
      }
      .my {
        background: url("./my_light.svg") no-repeat;
        background-size: 30px 30px;
      }
    }
    .router-link-exact-active {
      color: #e16531;
      .home {
        background: url("./home_fill_light.svg") no-repeat;
        background-size: 30px 30px;
      }
      .form {
        background: url("./form_fill_light.svg") no-repeat;
        background-size: 30px 30px;
      }
      .my {
        background: url("./my_fill_light.svg") no-repeat;
        background-size: 30px 30px;
      }
    }
  }
}
</style>
