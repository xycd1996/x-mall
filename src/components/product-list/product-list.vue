<template>
  <div class="product-list">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="product-item">
        <div class="product-image">
          <img :src="item.image" width="100" height="100" alt="product">
        </div>
        <div class="product-info">
          <h1>特色烤鸭</h1>
          <div class="price">
            ￥199.00
            <i class="old-price">￥2999.00</i>
          </div>
          <div class="sold">已售19件</div>
        </div>
        <div class="product-buy">
          <button>购买</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '123',
          image: require('@assets/images/product.jpg')
        },
        {
          name: '222',
          image: require('@assets/images/product.jpg')
        },
        {
          name: '222',
          image: require('@assets/images/product.jpg')
        },
        {
          name: '222',
          image: require('@assets/images/product.jpg')
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  margin-top: 10px;
  .product-item {
    display: flex;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px #bbb;
    .product-image {
      width: 100px;
      height: 100px;
    }
    .product-info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      h1 {
        flex: 1 1 auto;
        font-size: 18px;
        font-weight: 600;
      }
      .price {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: crimson;
        .old-price {
          font-size: 12px;
          color: #888;
          text-decoration: line-through;
        }
      }
      .sold {
        margin-top: 6px;
        font-size: 14px;
        color: #888;
      }
    }
    .product-buy {
      position: relative;
      button {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 26px;
        width: 60px;
        color: #fff;
        background: red;
        border: red solid 1px;
        border-radius: 2px;
      }
    }
  }
}
</style>

