<template>
  <div id="app">
    <router-view />
    <Tabbar>
      <Tabbaritem path="/home">
        <div slot="itemText">首页</div>
        <div slot="itemImg"><img src="./assets/home.png" alt="" /></div>
        <div slot="itemActiveImg"><img src="./assets/s-home.png" alt="" /></div>
      </Tabbaritem>
      <Tabbaritem path="/category">
        <div slot="itemText">分类</div>
        <div slot="itemImg"><img src="./assets/category.png" alt="" /></div>
        <div slot="itemActiveImg"><img src="./assets/s-category.png" alt="" /></div>
      </Tabbaritem>
      <Tabbaritem path="/cart">
        <div slot="itemText">购物车</div>
        <div slot="itemImg"><img src="./assets/cart.png" alt="" /></div>
        <div slot="itemActiveImg"><img src="./assets/s-cart.png" alt="" /></div>
      </Tabbaritem>
      <Tabbaritem path="/profile">
        <div slot="itemText">我的</div>
        <div slot="itemImg"><img src="./assets/profile.png" alt="" /></div>
        <div slot="itemActiveImg"><img src="./assets/s-profile.png" alt="" /></div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar/Tabbar";
import Tabbaritem from "./components/Tabbar/Tabbaritem";

export default {
  name: "app",
  components: {
    Tabbar,
    Tabbaritem,
  },
};
</script>