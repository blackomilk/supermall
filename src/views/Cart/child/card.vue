<template>
  <div class="categoryDiv">
    <div class="inDiv">
      <div class="inputDiv">
        <input class="input" type="text" :value="categoryName" />
      </div>
      <div class="cardDiv" id="carddiv">
        <draggable
          :v-model="categoryList"
          :group="categoryGroup"
          :animation="animation"
          @start="onStart"
          @end="onEnd"
          @add="onAdd"
          @update="onUpdate(categoryList)"
        >
          <transition-group>
            <div class="card" v-for="item in categoryList" :key="item" @click="toggleModal">
              <p>{{ item }}</p>
            </div>
          </transition-group>
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
        <button class="addBtn" @click="addCard">
          添加一张新卡片
        </button>
      </div>
    </div>
    <modal v-show="showModal" @closeme="closeme" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import modal from './modal'

export default {
  name: "card",
  components: {
    draggable,modal
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
      addBtnShow: true,
      showModal: false
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
    this.$emit("onUp");
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    closeme() {
      this.showModal = !this.showModal
    },
    addCard() {
      this.addBtnShow = false;
      const carddiv = document.getElementById("carddiv");
      if (carddiv.scrollTop != carddiv.scrollHeight + 0.7 + "rem") {
        carddiv.scrollTop = carddiv.scrollHeight + 0.7 + "rem";
      } else {
      }
    },
    addCardContent() {
      const textarea = document.getElementById("textarea");
      this.categoryList.push(textarea.value);
      textarea.value = "";
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
    onUpdate(list) {},
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
  background-color: #ebecf0;
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
.inDiv {
  width: 100%;
  height: auto;
}
.cardDiv {
  /* background-color: midnightblue; */
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 0.08rem;
  padding: 0 0.08rem;
  z-index: 1;
  min-height: 0;
}
.card {
  position: relative;
  width: 100%;
  height: 1.3rem;
  padding: 0.2rem;
  border-radius: 0.06rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  background-color: #ffffff;
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