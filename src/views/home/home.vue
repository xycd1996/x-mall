<template>
  <div class="home">
    <StoreHeader></StoreHeader>
    <Address></Address>
    <ProductList></ProductList>
  </div>
</template>

<script>
import StoreHeader from '@components/store-header/store-header'
import ProductList from '@components/product-list/product-list'
import Address from '@components/address/address'

export default {
  components: {
    StoreHeader,
    ProductList,
    Address
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px;
}
</style>

