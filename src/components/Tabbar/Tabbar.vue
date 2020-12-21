<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import Tabbaritem from './Tabbaritem'

export default {
  name: 'tabbar',
  components: {
    Tabbaritem
  }
}
</script>

<style>
  #tabbar {
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0px -1px 5px rgba(100, 200, 300, .1);
  }
</style>