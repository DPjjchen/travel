<template>
  <div class='icons'>
    <swiper >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class='icon-img-border'>
            <img class='icon-img' :src="item.imgUrl" alt="努力加载中">
          </div>
          <P class='icon-content'>{{item.desc}}</P> 
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'icons',
    props: {
      list: Array
    },
    data () {
    return {
        swiperOption: {
          autoplay: false,
          observeParents: true,
          observer: true,
        }
      }
    },
    computed: {
      pages () {
        const pages = []
        // 循环iconsList每一项,接收item index 两个参数
        this.list.forEach((item, index) => {
          //计算页数 向下取整  8个为一页
          const page = Math.floor(index / 8)
          //判断 该页数是否存在 不存在则生成一个空数据 再把item 输入进数据内
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
  }
  }
</script>

<style scoped lang='stylus'>
@import '../../assets/varibles.styl'

  .icons
    overflow :hidden
    height:0
    padding-bottom 50%
    margin-top 0.1rem
    .icon
      position relative
      float left
      overflow:hidden
      width 25%
      padding-bottom  25%
      height 0
      .icon-img-border
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img
          display: block
          margin: 0 auto
          height: 100%
      .icon-content
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $fontColor
        ellipsis()
        
     

</style>