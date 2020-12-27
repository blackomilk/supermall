<template>
  <div class="goods">
    <GoodsItem class="goods-item" v-for="(item,id) in goods" :key="id" :item="item"/>
  </div>
</template>

<script>
import GoodsItem from '../goodsitem/goodsitem'

export default {
  name: 'goods',
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    // setTimeout(() => {
    //     console.log("this.goods",this.goods)
    // }, 3000);
  }
}
</script>

<style>
  .goods {
    position: relative;
    /* width: 100%; */
    /* min-height: 100%; */
    margin-top: 0.3rem;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    /* margin-bottom: 1rem; */
    /* bottom: 1rem; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>