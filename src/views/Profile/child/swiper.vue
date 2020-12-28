<template>
<div class="swiper">
  <ul class="slides">
    <input type="radio" id="con1" name="con" checked>
    <input type="radio" id="con2" name="con">
    <input type="radio" id="con3" name="con">
    <li class="slide">1</li>
    <li class="slide">2</li>
    <li class="slide">3</li>
    <div class="con-vis">
      <label for="con1"></label>
      <label for="con2"></label>
      <label for="con3"></label>
    </div>
  </ul>
</div>
  
</template>

<script>
export default {
  name: "swiper",
};
</script>

<style scoped>
.swiper {
  width: 100%;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .slides {
   position: relative;
   width: 100%;
   height: 2rem;
   list-style: none;
   margin: 0rem;
   padding: 0rem;
   background-color: #eee;
   overflow: hidden;
 }
 .slide {
   margin: 0rem;
   padding: 0rem;
   width: inherit;
   height: inherit;
   position: absolute;
   top: 0rem;
   left: 0rem;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: Helvetica, sans-serif;
   font-size: 1rem;
   color: #ffffff;
   transition: .5s transform ease-in-out;
 }
 .slide:nth-of-type(1) {
   background-color: #f2e205;
 }
 .slide:nth-of-type(2) {
   background-color: #f25c05;
   left: 100%;
 }
 .slide:nth-of-type(3) {
   background-color: #495f8c;
   left: 200%;
 }
 input {
   position: relative;
   z-index: 100;
   display: none;
 }
 .con-vis {
   position: absolute;
   width: 100%;
   bottom: 0.3rem;
   text-align: center;
 }
 .con-vis label {
   display: inline-block;
   width: 0.2rem;
   height: 0.2rem;
   background-color: #fff;
   border-radius: 50%;
   margin: 0 0.06rem;
   border: 0.04rem solid #ffffff;
 }
 .slides input[type='radio']:nth-of-type(1):checked ~ .con-vis label:nth-of-type(1) {
   background-color: #333;
 }
 .slides input[type='radio']:nth-of-type(2):checked ~ .con-vis label:nth-of-type(2) {
   background-color: #333;
 }
 .slides input[type='radio']:nth-of-type(3):checked ~ .con-vis label:nth-of-type(3) {
   background-color: #333;
 }
 .slides input[type='radio']:nth-of-type(1):checked ~ .slide {
   transform: translateX(0%);
 }
 .slides input[type='radio']:nth-of-type(2):checked ~ .slide {
   transform: translateX(-100%);
 }
 .slides input[type='radio']:nth-of-type(3):checked ~ .slide {
   transform: translateX(-200%);
 }
  </style>