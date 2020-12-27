<template>
  <div class="categorylist">
    <div
      class="item"
      v-for="(item, index) in categorylist"
      :key="index"
      @click="handleListItem(index)"
      :class="currentIndex === index ? 'active' : ''"
    >
      <div class="text">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categorylist",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    categorylist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleListItem(index) {
      this.$emit("handleListItem", index);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.categorylist {
  width: 30%;
  background-color: #f6f6f6;
  height: 100%;
}
.item {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
}
.active {
  border-left: 0.02rem solid #ff8198;
  background-color: #fff;
}
</style>