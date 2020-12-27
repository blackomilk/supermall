<template>
  <div class="iteminfo">
    <div class="header">
      <div class="start line"></div>
      <div class="desc">{{ itemInfo.desc }}</div>
      <div class="end line"></div>
    </div>
    <div class="content">
      <div v-for="(item, index) in itemInfo.detailImage" :key="index">
        <div class="title">{{ item.key }}</div>
        <div v-for="(img, ind) in item.list" :key="ind">
          <img class="img" :src="img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "iteminfo",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.iteminfo {
  margin-top: 0.3rem;
  border-bottom: 0.12rem solid #f2f2f2;
}
.header {
  padding: 0rem 0.3rem;
}
.line {
  width: 3rem;
  height: 0.02rem;
  background-color: #666;
  position: relative;
}
.start::before,
.end::after {
  content: "";
  position: absolute;
  width: 0.17rem;
  height: 0.17rem;
  background-color: #333;
}
.start::before {
  bottom: 0rem;
}
.end::after {
  bottom: 0;
  right: 0;
}
.end {
  float: right;
}
.desc {
  margin: 0.6rem 0rem;
}
.title {
  margin: 1rem 0rem 0.3rem 0.3rem;
  font-size: 0.5rem;
}
.img {
  max-width: 100%;
}
</style>