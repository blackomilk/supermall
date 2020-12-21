<template>
  <div id="home">
    <Navbar class="navbar"><div slot="center">购物街</div></Navbar>
    <HomeSwiper :banner="banner" />
    <Recommend :recommend="recommend" />
    <Feature />
    <SelectBar
      :titleItem="['流行', '新款', '精选']"
      @currentType="handleType"
    />
    <Goods :goods="goods[currentType].list" />
    <div class="backTop"><img src="../../assets/back-top.png" alt=""></div>
  </div>
</template>

<script>
import Navbar from "../../components/navbar/navbar";
import HomeSwiper from "./child/homeSwiper/homeSwiper";
import Recommend from "./child/recommend/recommend";
import Feature from "./child/feature/feature";
import SelectBar from "../../components/selectbar/selectbar";
import Goods from "../../components/goods/goods";

import { getHomeMultidata, getGoods } from "../../network/home";
const CURRENTTYPE = ["pop", "new", "sell"];
export default {
  name: "home",
  components: {
    Navbar,
    HomeSwiper,
    Recommend,
    Feature,
    SelectBar,
    Goods,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this._getHomeMultidata();
    this._getGoods(this.currentType);
  },
  methods: {
    _getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log("ressssssssssssssss", res);
        (this.banner = res.data.banner.list),
          (this.recommend = res.data.recommend.list);
      });
    },
    _getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then((res) => {
        // console.log("dsdadsadsadadasadada", res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
      });
    },
    handleType(index) {
      this.currentType = CURRENTTYPE[index];

      this._getGoods(this.currentType);
    },
  },
};
</script>

<style>
#home {
  position: relative;
}
.navbar {
  background-color: #ff8198;
  color: #fff;
  font-size: 0.34rem;

  position: sticky;
  display: flex;
  left: 0rem;
  right: 0rem;
  top: 0rem;
  z-index: 100;
}
.backTop {
  position: fixed;
  right: 20rem;
  bottom: 20rem;
}
.backTop img {
  width: 100rem;
  height: 100rem;
  z-index: 2000;
}
</style>