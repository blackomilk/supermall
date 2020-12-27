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
    <!-- <keep-alive> -->
      <Goods :goods="goods[currentType].list" />
    <!-- </keep-alive> -->
    <BackTop />
  </div>
</template>

<script>
import Navbar from "../../components/navbar/navbar";
import HomeSwiper from "./child/homeSwiper/homeSwiper";
import Recommend from "./child/recommend/recommend";
import Feature from "./child/feature/feature";
import SelectBar from "../../components/selectbar/selectbar";
import Goods from "../../components/goods/goods";
import BackTop from "../../components/backtop/backtop";

import { getHomeMultidata, getGoods } from "../../network/home";
const CURRENTTYPE = ["pop", "new", "sell"];
const SCROLLTOP = 2000;
export default {
  name: "home",
  components: {
    Navbar,
    HomeSwiper,
    Recommend,
    Feature,
    SelectBar,
    Goods,
    BackTop,
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
      isShowBackBtn: false,
      scrollTop: 0,
    };
  },
  // activated() {
  //   console.log("this.scroltop", this.scrollTop);
  //   if (this.scrollTop > 0) {
  //     window.scrollTo(0, this.scrollTop);

  //     window.addEventListener("scroll", this.lodeMore);
  //   }
  // },
  mounted() {
    this._getHomeMultidata();
    this._getGoods("pop");
    this._getGoods("new");
    this._getGoods("sell");
    window.addEventListener("scroll", this.lodeMore);
    this.lodeMore();
  },
  destroyed() {
    window.removeEventListener("scroll", this.lodeMore); //页面离开后销毁监听事件
  },
  methods: {
    saveScroll() {
      this.scrollTop =
        document.documentElement && document.documentElement.scrollTop;
    },
    lodeMore() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // console.log("scrollTop", scrollTop);
      // console.log("windowHeight", windowHeight);
      // console.log("scrollHeight", scrollHeight);
      this.scrollTop = scrollTop;
      if (scrollTop != 0) {
        if (scrollTop + windowHeight >= scrollHeight) {
          this._getGoods(this.currentType);
          console.log("this.currentType", this.currentType);
          console.log("this.goods.page", this.goods[this.currentType].page);
          console.log("this.goods", this.goods[this.currentType]);
        }
      }
    },
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
        this.goods[type].page += 1;
      });
    },
    handleType(index) {
      this.currentType = CURRENTTYPE[index];

      this._getGoods(this.currentType);
      console.log("this.goods.page", this.goods[this.currentType].page);
      console.log("this.goods", this.goods[this.currentType]);
    },
  },
};
</script>

<style scoped>
/* ::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
} */
#home {
  position: relative;
}
.navbar {
  background-color: #ff8198;
  color: #fff;
  font-size: 0.34rem;
}
</style>