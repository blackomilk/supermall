<template>
  <div class="recommendinfo">
    <Goods :goods="recommends"/>
  </div>
</template>

<script>
import Goods from '../../../components/goods/goods'

export default {
  name: 'recommendinfo',
  components: {
    Goods
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>