<template>
  <div id="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
#navbar {
  display: flex;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  box-shadow: 0 0.02rem 0.02rem rgba(100, 100, 100, 0.1);
  position: sticky;
  left: 0rem;
  right: 0rem;
  top: 0rem;
  z-index: 100;
}
.left,
.right {
  width: 1.2rem;
}
.center {
  flex: 1;
}
</style>