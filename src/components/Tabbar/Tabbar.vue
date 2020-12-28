<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import Tabbaritem from "./Tabbaritem";

export default {
  name: "tabbar",
  components: {
    Tabbaritem,
  },
};
</script>

<style>
#tabbar {
  display: flex;
  position: sticky;
  height: 0.98rem;
  width: 100%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2000;
  box-shadow: 0px -1px 5px rgba(100, 200, 300, 0.1);
}
</style>