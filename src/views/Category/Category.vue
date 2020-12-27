<template>
  <div id="category">
    <Navbar class="navbar">
      <div slot="center">商品分类</div>
    </Navbar>
    <div class="info">
      <CategoryList
        :categorylist="categorylist"
        @handleListItem="handleListItem"
      />
      <CategoryInfo
        :subcategories="categoryData[this.currentIndex].subcategories"
      />
    </div>
  </div>
</template>

<script>
import CategoryList from "./child/CategoryList";
import CategoryInfo from "./child/CategoryInfo";
import Navbar from "../../components/navbar/navbar";

import { getCategoryList, getCategoryInfo } from "../../network/category";
export default {
  name: "category",
  data() {
    return {
      categorylist: [],
      categoryData: {},
      currentIndex: 0,
    };
  },
  components: {
    CategoryList,
    CategoryInfo,
    Navbar,
  },
  mounted() {
    this._getCategoryList();
  },
  methods: {
    handleListItem(index) {
      this.currentIndex = index;

      this._getCategoryInfo(this.currentIndex);
    },
    _getCategoryList() {
      getCategoryList().then((res) => {
        console.log("categorylist", res);
        const category = res.data.category.list;
        this.categorylist = res.data.category.list;
        //初始化每个类别得子数据
        const categoryData = {};
        for (let i = 0; i < category.length; i++) {
          categoryData[i] = {
            subcategories: [],
            categoryDetail: [],
          };
        }
        this.categoryData = categoryData;
        // category.map(e => {
        //   categoryData[e] = {
        //     subcategories: [],
        //     categoryDetail: [],
        //   }
        // })
        console.log("categoryData", categoryData);
        this._getCategoryInfo(0);
      });
    },
    _getCategoryInfo(currentIndex) {
      const maitkey = this.categorylist[currentIndex].maitKey;
      console.log("maitkey", maitkey);
      getCategoryInfo(maitkey).then((res) => {
        console.log("res", res);
        const tempCategoryData = this.categoryData;
        tempCategoryData[currentIndex].subcategories = res.data.list;
        this.categoryData = tempCategoryData;
        console.log("categoryDatacategoryDatacategoryData", this.categoryData);
      });
    },
  },
};
</script>

<style scoped>
#category {
  position: relative;
  /* top: 0rem; */
}
.info {
  display: flex;
}
.navbar {
  font-size: 0.34rem;
  background-color: #fff;
}
</style>