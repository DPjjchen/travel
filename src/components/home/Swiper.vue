<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for = "item of swiperList" :key='item.id' >
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt="加载中"
        >
      </swiper-slide>
     
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination:{
          el:'.swiper-pagination'
        },
        observeParents: true,
        observer: true,
        loop:true,
      },
      swiperList:[
        {
          id:'1',
          imgUrl:'//img1.qunarzz.com/vc/07/aa/fc/147086c7e45caf75337336dc9b.jpg'
        },
        {
          id:'2',
          imgUrl:'//img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg'
        },
        {
          id:'3',
          imgUrl:'//img1.qunarzz.com/vc/1d/d5/dc/bfb1990e14a1fdb082cf817657.jpg'
        }
      ]
    }
  }
};
</script>

<style scoped lang='stylus'>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow hidden
    width:100%
    height 0
    padding-bottom (289/946*100)%
    background:#eee
    .swiper-img {
      width: 100%;
}
</style>