<template>
  <div class="categoryinfo">
    <div class="item" v-for="(item, index) in subcategories" :key="index">
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryinfo",
  props: {
    subcategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.categoryinfo {
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 33%;
  text-align: center;
  margin-top: 0.2rem;
}
.item img {
  width: 80%;
}
.item div {
  font-size: 0.2rem;
  margin-top: 0.3rem;
}
</style>