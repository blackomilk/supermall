<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide v-for="(item,index) in topImage" :key='index'>
      <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import Swiper2, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
Swiper2.use([Navigation, Pagination, Autoplay]);

export default {
  name: "imageSwiper",
  props: {
    topImage: {
        type: Array,
        default() {
          return []
        }
      }
  },
  data() {
    return {
      swiperOptions: {
        notNextTick: true,
        autoplay: {
          stopOnLastSlide: false,
          disableOnInteraction: false,
          delay: 1300,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  created() {

  },

  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper
    // }
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 8rem;
}
.slide {
  background-color: skyblue;
}
.swiper img {
  max-width: 100%;
}
</style>