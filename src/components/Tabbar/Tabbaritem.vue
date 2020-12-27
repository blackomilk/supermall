<template>
  <div id="tabbaritem" @click="itemClick()">
    <div v-if="!isActive" class="img"><slot name="itemImg"></slot></div>
    <div v-else class="img"><slot name="itemActiveImg"></slot></div>
    <div :style="activeStyle"><slot name="itemText"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  data() {
    return {
      // isActive: false,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
      // this.isActive = true
    },
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      set(val) {
        this.$route.path = this.path
      }
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style>
#tabbaritem {
  flex: 1;
  background-color: #f6f6f6;
  text-align: center;
  /* line-height: 0.98rem; */
  font-weight: bold;
  color: #2c3e50;
}
.img {
  margin-top: 0.06rem;
}
.img img {
  width: 0.46rem;
  height: 0.46rem;
}
/* .router-link-exact-active {
    color: #42b983;
  } */
</style>