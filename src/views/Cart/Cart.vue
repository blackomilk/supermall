<template>
  <div class="cart">
    <!-- 组一============ -->
    <CardDraggable
      categoryName="组一"
      :categoryList.sync="list1"
      @onAdd="handleOnAdd"
      @onUpdate="handleOnUp"
      @list="handleList1"
      @addBtnShow="handleAddBtnShow"
    />
    <!-- ==============================组二 -->
    <CardDraggable
      categoryName="组二"
      :categoryList.sync="list2"
      @onAdd="handleOnAdd"
      @onUpdate="handleOnUp"
      @list="handleList2"
      @addBtnShow="handleAddBtnShow"
    />
    
    <!-- ===================================组三 -->
    <CardDraggable
      categoryName="组三"
      :categoryList.sync="list3"
      @onAdd="handleOnAdd"
      @onUpdate="handleOnUp"
      @list="handleList3"
      @addBtnShow="handleAddBtnShow"
    />
    <!-- 组四 -->
    <CardDraggable
      categoryName="组四"
      :categoryList.sync="list4"
      @onAdd="handleOnAdd"
      @onUpdate="handleOnUp"
      @list="handleList4"
      @addBtnShow="handleAddBtnShow"
    />
    <!-- <div class="categoryDivAddBtn" @click="AddCategoryDiv">
      <button>添加一个新分类</button>
    </div> -->
  </div>
</template>

<script>
import { List } from "ant-design-vue";
import CardDraggable from "./child/card";

const LISTKEY = ["1", "2", "3"];
export default {
  name: "cart",
  components: {
    CardDraggable,
  },
  data() {
    return {
      list1: [
        1,
        2,
        3,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
      ],
      list2: [4, 5, 6],
      list3: [7, 8, 9],
      list4: [],
    };
  },
  mounted() {
    console.log(this)
  },
  methods: {
    handleAddBtnShow(listKey) {
    },
    handleList1(value) {
      this.list1 = value;
    },
    handleList2(value) {
      this.list2 = value;
    },
    handleList3(value) {
      this.list3 = value;
    },
    handleList4(value) {
      this.list4 = value;
    },
    AddCategoryDiv() {
      // this.categoryList.push(this.categoryDiv++);
    },
    handleOnAdd() {
      console.log("list1", this.list1);
      console.log("list2", this.list2);
      console.log("list3", this.list3);
      console.log("list4", this.list4);
    },
    handleOnUp() {
      console.log("list1", this.list1);
      console.log("list2", this.list2);
      console.log("list3", this.list3);
      console.log("list4", this.list4);
    },
  },
};
</script>

<style scoped>
.cart {
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 0.4rem;
  padding-bottom: 0.4rem;
  position: absolute;
  top: 1rem;
  right: 0;
  bottom: 0;
  left: 0;
}
.categoryDivAddBtn {
  width: 272px;
  height: 50px;
  margin: 0 4px;
  display: inline-block;
}
</style>