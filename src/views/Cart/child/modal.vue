<template>
  <div class="modal-backdrop">
    <div class="modal" :style="mainStyles">
      <div class="header">header</div>
      <div class="body">
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
      </div>
      <div class="footer">
        <button class="btn-close" @click="close">关闭</button>
        <button class="btn-confirm" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("closeme");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.modal {
  background-color: #fff;
  box-shadow: 0.04rem 0.04rem 0.4rem 0.02rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  width: 13rem;
}
.header {
  width: 100%;
  height: 1rem;
}
.body {
  flex: 1;
  border-top: 0.02rem solid rgba(189, 185, 185,0.3);
  border-bottom: 0.02rem solid rgba(189, 185, 185,0.3);
}
.footer {
  width: 100%;
  height: 1rem;
}
.btn-confirm,
.btn-close {
  outline: none;
  width: 1rem;
  height: 0.5rem;
  margin-top: 0.3rem;
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