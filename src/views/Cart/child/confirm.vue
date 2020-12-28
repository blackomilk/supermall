<template>
  <div class="confirm">
    <div class="body">
      <div class="header">确认删除吗？</div>
      <div class="footer">
        <button class="btn-close" @click="close">取消</button>
        <button class="btn-confirm" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirm",
  methods: {
    close() {
      this.$emit("closeConfirm");
    },
    confirm() {
      this.$emit("delCard");
    },
  },
};
</script>

<style scoped>
.confirm {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.body {
  width: 5rem;
  height: 2rem;
  background-color: #fff;
  box-shadow: 0.04rem 0.04rem 0.4rem 0.02rem;
  overflow-x: auto;
  border-radius: 0.1rem;
}
.header {
  width: 100%;
  height: 1.3rem;
  text-align: center;
  line-height: 1.5rem;
  font-size: 0.5rem;
  color: red;
}
.btn-confirm,
.btn-close {
  outline: none;
  width: 1rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  float: right;
}
.btn-confirm {
  background-color: #2db7f5;
  color: #fff;
  border: none;
}
.btn-close {
  background-color: transparent;
  color: #000;
  border: 0.02rem solid rgb(189, 185, 185);
}
</style>