<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <div
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </div>
    </ul> 
  </div>
</template>

<script>
  export default {
    name:'recommend',
    data(){
      return{
        list:[
          {
            id:'1',
            imgUrl:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
            title:'粤西泡汤圣地',
            desc:'自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
          },
          {
            id:'2',
            imgUrl:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
            title:'粤西泡汤圣地',
            desc:'自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
          },
          {
            id:'3',
            imgUrl:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
            title:'粤西泡汤圣地',
            desc:'自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
          },
          {
            id:'4',
            imgUrl:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
            title:'粤西泡汤圣地',
            desc:'自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/varibles.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>