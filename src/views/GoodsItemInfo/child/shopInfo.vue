<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="sell-info">
      <div class="left-info">
        <div class="total-sell">
          <div class="c-sells">{{ shopInfo.sells }}</div>
          <div class="total text">总销量</div>
        </div>
        <div class="total-goods">
          <div class="c-goods">{{ shopInfo.goodsCount }}</div>
          <div class="all-bb text">全部宝贝</div>
        </div>
      </div>
      <div class="right-info">
        <div
          class="grade-row"
          v-for="(item, index) in shopInfo.score"
          :key="index"
        >
          <div class="item name">{{ item.name }}</div>
          <div class="item score" :class="item.isBetter ? 'good' : 'less'">
            {{ item.score }}
          </div>
          <div class="item better" :class="item.isBetter ? 'good' : 'less'">
            {{ item.isBetter ? "高" : "低" }}
          </div>
        </div>
      </div>
    </div>
    <div class="shop-btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopinfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 0.2rem;
  border-bottom: 0.12rem solid #f2f2f2;
}
.shop-logo img {
  margin-top: 0.2rem;
  width: 0.9rem;
  height: 0.9rem;
}
.shop-logo span {
  margin-left: 0.2rem;
  font-size: 0.35rem;
  vertical-align: bottom;
}
.sell-info {
  margin: 0.5rem 0rem;
  display: flex;
  font-size: 0.27rem;
}
.left-info {
  flex: 1;
  display: flex;
  text-align: center;
  border-right: 0.02rem solid rgba(200, 200, 200, 0.6);
}
.left-info div {
  flex: 1;
}
.text {
  margin-top: 0.2rem;
}
.right-info {
  flex: 1;
  padding: 0rem 0.2rem;
}
.grade-row {
  display: flex;
  text-align: center;
}

.name {
  width: 2rem;
}
.grade-row .score {
  flex: 1;
}
.grade-row .better {
  flex: 1;
}
.shop-btn {
  text-align: center;
}
.good {
  color: #ff5777;
}

.less {
  color: #5ea732;
}
.shop-btn {
  width: 2rem;
  height: 1rem;
  border-radius: 0.5rem;
  margin: 0 auto;
}

.shop-btn button {
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  font-weight: 700;
}
</style>