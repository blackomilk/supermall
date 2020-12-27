<template>
  <div class="commentinfo">
    <div class="user">
      <div>用户评价</div>
      <div>更多>></div>
    </div>
    <div class="info">
      <div class="logo">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="text">
        <div class="text1">{{ commentInfo.content }}</div>
        <div class="text2">
          <span>{{ commentInfo.created }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
      </div>
      <div class="img">
        <div
          class="imgitem"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentinfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.commentinfo {
  margin: 0.3rem 0rem;
  padding: 0rem 0.3rem 0.5rem;
  border-bottom: 0.12rem solid #f2f2f2;
}
.user {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  border-bottom: 0.02rem solid #f2f2f2;
  font-size: 0.3rem;
}
.info {
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
}
.logo img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
}
.text2 {
  margin-top: 0.1rem;
}
.text2 span {
  margin-right: 0.1rem;
}
.img {
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
}
.imgitem img {
  width: 2rem;
  height: 2rem;
}
</style>