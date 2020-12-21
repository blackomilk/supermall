<template>
  <div class="selectbar">
    <div
      v-for="(item, index) in titleItem"
      :key="index"
      @click="handleItem(index)"
      :class="currentIndex === index ? 'active' : ''"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectbar",
  props: {
    titleItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    handleItem(index) {
      console.log("dsdadsa",index);
      this.currentIndex = index;
      this.$emit('currentType',index)
    },
  },
};
</script>

<style scoped>
.selectbar {
  position: sticky;
  top: 44px;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: #fff;
}
.selectbar div {
  height: 1rem;
  line-height: 1rem;
  flex: 1;
  display: inline-block;
  text-align: center;
  font-size: 0.3rem;
}
.selectbar span {
  padding: 0.1rem;
}
.active span {
  border-bottom: 0.07rem solid #ff8198;
}

</style>