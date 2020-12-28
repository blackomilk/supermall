<template>
  <div class="categoryDiv">
    <div class="inDiv">
      <div class="inputDiv">
        <input class="input" type="text" :value="categoryName" disabled />
      </div>
      <div class="cardDiv">
        <draggable
          id="first"
          v-model="list"
          :group="categoryGroup"
          :animation="animation"
          @start="onStart"
          @end="onEnd"
          @add="onAdd"
          @update="onUpdate(categoryList)"
        >
          <div
            class="card"
            v-for="item in categoryList"
            :key="item"
            @click="toggleModal(item)"
          >
            {{ item }}
            <img
              class="closeImg"
              src="../../../assets/close.png"
              alt=""
              @click.stop="delCard(item)"
            />
          </div>
        </draggable>
        <div v-if="addBtnShow"></div>
        <div v-else class="addCardDiv">
          <textarea
            class="addCardInput"
            name="text"
            rows="5"
            cols="70"
            placeholder="为这张卡片填写内容"
            autofocus
            id="textarea"
          />
          <button class="addCardBtn" @click="addCardContent">添加</button>
          <button class="clearCardBtn" @click="clear">取消</button>
        </div>
      </div>
      <!-- <button slot="header" @click="addCard">Add</button> -->
      <div class="btnDiv" v-if="addBtnShow">
        <button class="addBtn" @click="addCard">添加一张新卡片</button>
      </div>
    </div>
    <modal v-show="showModal" @closeme="closeme" :header="modalHeader" />
    <confirm v-show="showConfirm" @delCard="delConfirm" @closeConfirm="closeConfirm"/>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import modal from "./modal";
import confirm from "./confirm";
import Confirm from "./confirm.vue";

export default {
  name: "card",
  components: {
    draggable,
    modal,
    confirm,
  },
  props: {
    categoryName: {
      type: String,
      default() {
        return "";
      },
    },
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
    categoryGroup: {
      type: String,
      default() {
        return "site";
      },
    },
    animation: {
      type: Number,
      default() {
        return 300;
      },
    },
  },
  data() {
    return {
      drag: false,
      showModal: false,
      showConfirm: false,
      list: this.categoryList,
      addBtnShow: true,
      modalHeader: 0,
    };
  },
  computed: {
    // categoryList: {
    //   get() {
    //     return this.$store.state.categoryList
    //   },
    //   set() {
    //     this.$store.commit('updateList',value)
    //   }
    // }
  },
  updated() {
    this.$emit("list", this.list);
  },
  methods: {
    delCard(item) {
      this.showConfirm = !this.showConfirm
    },
    delConfirm(item) {
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
      this.showConfirm = !this.showConfirm
    },
    closeConfirm() {
      this.showConfirm = !this.showConfirm
    },
    toggleModal(item) {
      this.showModal = !this.showModal;
      this.modalHeader = item;
    },
    closeme() {
      this.showModal = !this.showModal;
    },
    addCard() {
      this.addBtnShow = false;
      this.$emit("addBtnShow", this.ListKey);
      const carddiv = document.getElementsByClassName("cardDiv");
      if (carddiv.scrollTop != carddiv.scrollHeight + 0.7 + "rem") {
        carddiv.scrollTop = carddiv.scrollHeight + 0.7 + "rem";
      } else {
      }
    },
    addCardContent() {
      const textarea = document.getElementById("textarea");
      if (textarea.value != "") {
        this.list.push(textarea.value);
        textarea.value = "";
      } else {
        alert("请输入内容");
      }

      // this.addBtnShow = true
      // console.log(textarea.value)
    },
    clear() {
      this.addBtnShow = true;
    },
    onStart() {
      this.drag = true;
    },
    onEnd() {
      this.drag = false;
    },
    onAdd() {
      console.log("list的值", this.categoryList);
      this.$emit("onAdd");
    },
    onUpdate() {},
  },
};
</script>

<style scoped>
.categoryDiv {
  width: 5.5rem;
  height: 100%;
  margin: 0 0.1rem;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}
.inDiv {
  width: 100%;
  height: auto;
  background-color: rgb(235, 236, 240);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
  border-radius: 0.1rem;
}
.inputDiv {
  width: 100%;
  height: 0.7rem;
}
.input {
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: 0rem;
  padding: 0.2rem;
  /* background-color: mediumspringgreen; */
}
.cardDiv {
  /* background-color: midnightblue; */
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 0.08rem;
  padding: 0 0.08rem;
  z-index: 1;
  /* min-height: 1rem; */
}
.card {
  position: relative;
  width: 100%;
  height: 1.3rem;
  padding: 0.2rem;
  border-radius: 0.06rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
  box-shadow: 0 0.02rem 0 rgba(9, 30, 66, 0.25);
}
.card:hover {
  background-color: rgba(61, 67, 87, 0.1);
}
.card:hover .closeImg {
  display: inline-block;
}
.closeImg {
  display: none;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  width: 0.35rem;
  height: 0.35rem;
}
.btnDiv {
  width: 100%;
  height: 1rem;
  padding: 0.1rem;
  display: flex;
  justify-content: left;
  align-items: center;
}
.addCardInput {
  display: block;
  width: 100%;
  height: 1.3rem;
  background: none;
  outline: none;
  border: 0rem;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.06rem;
  resize: none;
}
.addBtn,
.addCardBtn,
.clearCardBtn {
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 0.2rem;
  outline: none;
  border-radius: 0.1rem;
  /* background-color: red; */
  /* margin-top: 100px; */
}
.addCardBtn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.25rem;
  background-color: mediumseagreen;
  margin: 0.1rem 0rem;
}
.clearCardBtn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.25rem;
  background-color: olive;
  margin: 0.1rem 0.1rem 0rem;
}
</style>