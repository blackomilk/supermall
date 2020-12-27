<template>
  <div class="profile">
    <NavBar class="title"><div slot="center">我的</div></NavBar>
    <div class="body">
      <div class="section1">
        <div class="icon"><img src="../../assets/matti.png" alt="" /></div>
        <div class="center">
          <p class="login">登录/注册</p>
          <div>
            <img src="../../assets/iphone.png" alt="" />
            <span>暂无绑定手机号</span>
          </div>
        </div>
        <div class="right"><img src="../../assets/right.png" alt="" /></div>
      </div>
      <div class="balance">
        <div class="one">
          <div>
            <span class="a">0.00</span>
            <span>元</span>
          </div>
          <span>我的余额</span>
        </div>
        <div class="balanceDiv two">
          <div>
            <span class="a">0</span>
            <span>个</span>
          </div>
          <span>我的优惠</span>
        </div>
        <div class="three">
          <div>
            <span class="a">0</span>
            <span>分</span>
          </div>
          <span>我的积分</span>
        </div>
      </div>
      <div class="news">
        <div>
          <img src="../../assets/xiaoxi.png" alt="" />
          <span>我的消息</span>
        </div>
        <div>
          <img src="../../assets/jifen.png" alt="" />
          <span>积分商城</span>
        </div>
        <div>
          <img src="../../assets/huiyuan.png" alt="" />
          <span>会员卡</span>
        </div>
      </div>
      <div class="cart">
        <div>
          <img src="../../assets/s-cart.png" alt="" />
          <span>我的购物车</span>
        </div>
        <div>
          <img src="../../assets/download.png" alt="" />
          <span>下载购物APP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/navbar";
export default {
  name: "profile",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
  position: relative;
}
.title {
  background-color: #ff8198;
  color: #fff;
  font-size: 0.34rem;
}
.section1 {
  width: 100%;
  height: 2rem;
  background-color: #ff8198;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 1.3rem;
  height: 100%;
  line-height: 2rem;
  margin-left: 0.2rem;
}
.icon img {
  max-width: 100%;
}
.center {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
}
.center p {
  position: relative;
  font-size: 0.4rem;
  font-weight: 400;
  margin-bottom: 0.1rem;
  left: 0.1rem;
}
.center img {
  width: 0.5rem;
  height: 0.4rem;
}
.center span {
  margin-left: 0.05rem;
  vertical-align: middle;
}
.right {
  width: 1rem;
  height: 100%;
  line-height: 2rem;
}
.balance {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
}
.one,
.two,
.three {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02rem;
}
.balanceDiv {
  border-left: 0.02rem solid rgba(153, 153, 153, 0.2);
  border-right: 0.02rem solid rgba(153, 153, 153, 0.2);
}
.a {
  color: #ff8198;
  font-size: 0.3rem;
  margin-right: 0.05rem;
}
.news {
  width: 100%;
  height: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 0.3rem solid #f2f2f2;
}
.news div,.cart div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.25rem;
  border-bottom: 0.02rem solid #f2f2f2;
}
.news div img,.cart div img {
  width: 0.45rem;
  height: 0.45rem;
  margin-right: 0.2rem;
}
.news div span,.cart div span {
  flex: 1;
}
.cart {
  width: 100%;
  height: 2.4rem;
  border-top: 0.3rem solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart div:last-child {
  border-bottom: none;
}
</style>