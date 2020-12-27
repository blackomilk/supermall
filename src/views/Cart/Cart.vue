<template>
  <div class="cart">
      <!-- 组一============ -->
      <CardDraggable categoryName="组一" :categoryList.sync="list1" @onAdd="handleOnAdd" @onUp="handleOnUp" />
      <!-- ==============================组二 -->
      <CardDraggable categoryName="组二" :categoryList.sync="list2" @onAdd="handleOnAdd" @onUp="handleOnUp" />
      <!-- ===================================组三 -->
      <CardDraggable categoryName="组三" :categoryList.sync="list3" @onAdd="handleOnAdd" @onUp="handleOnUp" />
      <CardDraggable categoryName="组si" :categoryList.sync="list3" @onAdd="handleOnAdd" @onUp="handleOnUp" />
      <CardDraggable categoryName="组wu" :categoryList.sync="list3" @onAdd="handleOnAdd" @onUp="handleOnUp" />
      <CardDraggable categoryName="组liu" :categoryList.sync="list3" @onAdd="handleOnAdd" @onUp="handleOnUp" />
      <div class="categoryDivAddBtn" @click="AddCategoryDiv">
        <button>添加一个新分类</button>
    </div>
    
  </div>
</template>

<script>
import CardDraggable from "./child/card";

export default {
  name: "cart",
  components: {
    CardDraggable,
  },
  data() {
    return {
      list1: [1,2,3,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      list2: [4,5,6],
      list3: [7,8,9]
    };
  },
  methods: {
    AddCategoryDiv() {
      // this.categoryList.push(this.categoryDiv++);
    },
    handleOnAdd() {
      // console.log('list1',this.list1)
      // console.log('list2',this.list2)
      // console.log('list3',this.list3)
    },
    handleOnUp() {
      console.log('list1',this.list1)
      console.log('list2',this.list2)
      console.log('list3',this.list3)
    }
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
background-color: lightgrey;}
.categoryDivAddBtn {
  width: 272px;
  height: 50px;
  margin: 0 4px;
  display: inline-block;
}
</style>