<template>
  <div class="backTop" @click="handleBackTop" v-show="isShowBackBtn">
    <img src="../../assets/back-top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "backtop",
  data() {
    return {
      isShowBackBtn: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log("sadadadasdad", scrollTop);
      if (scrollTop > 2000) {
        this.isShowBackBtn = true;
      } else {
        this.isShowBackBtn = false;
      }
    },
    handleBackTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      //实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 300;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
.backTop {
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 100;
  width: 39px;
  height: 39px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  text-align: center;
  line-height: 39px;
}
.backTop img {
  width: 70%;
  height: 70%;
}
</style>