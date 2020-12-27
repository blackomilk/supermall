<template>
  <div class="baseInfo">
    <div class="info">
      <div class="title">{{ baseInfo.title }}</div>
      <div class="price">
        <span class="newprice">{{ baseInfo.newPrice }}</span>
        <span class="oldprice">{{ baseInfo.oldPrice }}</span>
        <span class="discount">{{ baseInfo.discount }}</span>
      </div>
    </div>
    <div class="columns">
      <span v-for="(item, index) in baseInfo.columns" :key="index">{{
        item
      }}</span>
    </div>
    <div class="service">
      <div
        class="serviceItem"
        v-for="(item, index) in baseInfo.services"
        :key="index"
      >
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.baseInfo {
  margin-top: 0.1rem;
  padding: 0.1rem;
  font-size: 0.27rem;
  font-family: Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.02rem;
  border-bottom: 0.12rem solid #f2f2f2;
}
.title {
}
.price {
  margin-top: 0.2rem;
}
.price span {
  margin-right: 0.15rem;
}
.newprice {
  color: #ff8198;
}
.oldprice {
  font-size: 0.15rem;
  text-decoration-line: line-through;
}
.discount {
  background-color: #ff8198;
  font-size: 0.15rem;
  color: #fff;
  padding: 0.05rem 0.06rem;
  font-size: 0.15rem;
  border-radius: 0.1rem;
  position: relative;
  bottom: 0.07rem;
}
.columns {
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  margin-top: 0.15rem;
  padding-bottom: 0.07rem;
  border-bottom: 0.02rem solid rgba(200, 200, 200, 0.6);
}
.columns span {
  text-align: center;
}
.service {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  letter-spacing: 0rem;
}
.serviceItem {
  font-size: 0.01rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* margin: 0;
  padding: 0; */
}
.serviceItem img {
  width: 0.2rem;
  height: 0.2rem;
  margin-right: 0.03rem;
}
.serviceItem span {
}
</style>