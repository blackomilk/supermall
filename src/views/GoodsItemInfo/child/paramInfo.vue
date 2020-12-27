<template>
  <div class="paraminfo">
    <div class="table" v-for="(itema, aaa) in paraminfo.sizes" :key="'a' + aaa">
      <div class="row" v-for="(itemb, bbb) in itema" :key="'b' + bbb">
        <div class="column" v-for="(itemc, ccc) in itemb" :key="'c' + ccc">
          <div class="element">{{ itemc }}</div>
        </div>
      </div>
    </div>
    <div class="info" v-for="(itemd, ddd) in paraminfo.infos" :key="'d' + ddd">
      <div class="infoitem">
        <div class="infokey">{{ itemd.key }}</div>
        <div class="infovalue">{{ itemd.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paraminfo",
  props: {
    paraminfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.paraminfo {
  margin: 0.2rem 0rem;
  padding: 0rem 0.3rem 0.3rem;
  font-size: 0.3rem;
  color: #8f8888;
  border-bottom: 0.12rem solid #f2f2f2;
}
.row {
  display: flex;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.02rem solid #f2f2f2;
}
.column {
  flex: 1;
}
.info {
}
.infoitem {
  display: flex;
  flex: 1;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.02rem solid #f2f2f2;
}
.infokey {
  width: 1.1rem;
  margin-right: 0.6rem;
}
.infovalue {
  color: #ff5777;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>