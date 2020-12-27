<template>
  <div class="goodsiteminfo">
    <ImageSwiper :topImage="topImages" />
    <BaseInfo :baseInfo="baseInfo" />
    <Shopinfo :shopInfo="shopInfo" />
    <ItemInfo :itemInfo="itemInfo" />
    <Param :paraminfo="paraminfo" />
    <CommentInfo :commentInfo="commentInfo" />
    <RecommendInfo :recommends="recommends" />
    <BackTop />
  </div>
</template>

<script>
import {
  getGoodsItemInfo,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo,
} from "../../network/goodsItemInfo";
import ImageSwiper from "./child/imageSwiper";
import BaseInfo from "./child/baseInfo";
import Shopinfo from "./child/shopInfo";
import ItemInfo from "./child/itemInfo";
import Param from "./child/paramInfo";
import CommentInfo from "./child/commentInfo";
import RecommendInfo from "./child/recommendInfo";
import BackTop from "../../components/backtop/backtop";

export default {
  name: "goodsiteminfo",
  components: {
    ImageSwiper,
    BaseInfo,
    Shopinfo,
    ItemInfo,
    Param,
    CommentInfo,
    RecommendInfo,
    BackTop,
  },
  data() {
    return {
      iid: 1,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      itemInfo: {},
      paraminfo: {},
      commentInfo: {},
      recommends: [],
      isShowBackBtn: false,
    };
  },
  mounted() {
    this.iid = this.$route.query.iid;
    // console.log(this.iid)
    this._getGoodsItemInfo();
    this._getRecommends();
    // this.handleScroll()
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop != 0) {
        this.handleScrollTop()
      }
    },
    handleScrollTop() {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -=500;
        if(top <=0) {
          clearInterval(timeTop)
        }
      }, 1);
    },
    _getGoodsItemInfo() {
      getGoodsItemInfo(this.iid).then((res) => {
        const data = res.result;
        // console.log(data)
        console.log(res);
        //取出顶部的图片
        const topImages = data.itemInfo.topImages;
        //创建BaseInfo对象
        const baseInfo = new GoodsBaseInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //创建ShopInfo对象
        const shopInfo = new ShopInfo(data.shopInfo);
        //获取itemInfo信息
        const itemInfo = data.detailInfo;
        //创建ParamInfo对象
        const paramInfo = new ParamInfo(
          data.itemParams.info,
          data.itemParams.rule
        );
        //获取评论信息
        let commentInfo = {};
        if (data.rate && data.rate.cRate > 0) {
          commentInfo = data.rate.list[0];
          console.log("this.commentInfo", this.commentInfo);
        }
        this.topImages = topImages;
        this.baseInfo = baseInfo;
        this.shopInfo = shopInfo;
        this.itemInfo = itemInfo;
        this.paraminfo = paramInfo;
        this.commentInfo = commentInfo;
      });
    },
    _getRecommends() {
      getRecommends().then((res) => {
        this.recommends = res.data.list;
        // console.log('this.recommends,',this.recommends)
      });
    },
  },
};
</script>

<style scoped>
.goodsiteminfo {
  position: relative;
}
</style>