<template>
  <div class="goodsItem">
    <img :src="item.show.img" alt="" />
    <div class="goodsInfo">
      <p>{{ item.title }}</p>
      <div class="goodsItemPrice">
        <span class="orgprice">{{ item.orgPrice }}</span>
        <span class="price">￥{{ item.price }}</span>
        <span class="cfav">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsitem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goodsItem {
  width: 47%;
  position: relative;
  text-align: center;
  color: #333;
  padding-bottom: 1rem;
}
.goodsItem img {
  position: relative;
  max-width: 100%;
  border-radius: 0.1rem;
  margin-bottom: 0.37rem;
}
.goodsInfo {
  position: absolute;
  font-size: 0.01rem;
  overflow: hidden;
  bottom: 0.1rem;
  left: 0rem;
  right: 0rem;
  text-align: center;
}
.goodsInfo p {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.1rem;
}
.goodsItemPrice {
  display: flex;
}
.goodsItemPrice span {
  flex: 1;
}
.orgprice {
  color: #999;
  text-decoration-line: line-through;
}
.price {
  color: #ff8198;
}
.cfav {
  color: #666;
}
</style>