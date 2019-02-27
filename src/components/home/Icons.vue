<template>
  <div class='icons'>
    <swiper >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class='icon-img-border'>
            <img class='icon-img' :src="item.imgUrl" alt="努力加载中">
          </div>
          <P class='icon-content'>{{item.name}}</P> 
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'icons',
    data () {
      return{
        iconsList:[
          {
            id:'01',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            name:'景点门票特价区'
          },
          {
            id:'02',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
            name:'出境游'
          },
          {
            id:'03',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
            name:'一日游'
          },
          {
            id:'04',
            imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/23e0e0f2e3ab69f6644e5625b31c35a1.png",
            name:'美食林'
          },
          {
            id:'05',
            imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/23e0e0f2e3ab69f6644e5625b31c35a1.png",
            name:'汽车票'
          },
          {
            id:'06',
            imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/23e0e0f2e3ab69f6644e5625b31c35a1.png",
            name:'邮轮游'
          },
          {
            id:'07',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
            name:'超级巴士'
          },
          {
            id:'08',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            name:'攻略'
          },
          {
            id:'09',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
            name:'超级巴士'
          },
          {
            id:'10',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            name:'攻略'
          },
        ],

      }
    },
    computed: {
      pages () {
        const pages = []
        // 循环iconsList每一项,接收item index 两个参数
        this.iconsList.forEach((item, index) => {
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
      .icon-img-border
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
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