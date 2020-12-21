<template>
  <div class="recommend">
    <div v-for="(item, id) in recommend" :key="id" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  display: flex;
  margin-top: 0.3rem;
  padding-bottom: 0.3rem;
  text-align: center;
  font-size: 0.27rem;
  border-bottom: 0.21rem solid rgba(222, 222, 222, .5);
}
.item {
  flex: 1;
}
.item a {
  text-decoration:none;
  color: #999;
}
.item img {
  width: 1.4rem;
  height: 1.4rem;
}
.item span {
  display: block;
  margin-top: 0.07rem;
}
</style>