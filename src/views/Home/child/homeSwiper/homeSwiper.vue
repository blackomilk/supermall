<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide v-for="(item, id) in banner" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
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
  name: "homeSwiper",
  props: {
    banner: {
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
<style >
.swiper {
  width: 100%;
  height: 3.7rem;
}
.slide {
  background-color: skyblue;
}
.swiper img {
  max-width: 100%;
}
</style>