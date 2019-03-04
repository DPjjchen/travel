<template>
  <div class='list' ref='wrapper'>
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">json数据</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">json数据</div>
        </div>
        <div class="button-wrapper">
          <div class="button">json数据</div>
        </div>
        <div class="button-wrapper">
          <div class="button">json数据</div>
        </div>
        <div class="button-wrapper">
          <div class="button">json数据</div>
        </div>
        <div class="button-wrapper">
          <div class="button">json数据</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom" >A</div>
      <div class="item-list">
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
        <div class="item border-topbottom">阿拉尔</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

  export default {
    name:'CityList',
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
  }
</script>

<style scoped lang='stylus'>
  @import '../../assets/varibles.styl'
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .list
    position absolute
    overflow hidden
    top 1.58rem
    right 0
    bottom 0
    left 0  
    .title
      line-height :0.54rem 
      background #eeeeee
      padding-left 0.2rem
      color #666
      font-size :0.26rem
    .button-list 
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left 
        width: 33.333333333%
        .button
          margin:0.1rem
          padding: 0.1rem 0
          text-align:center
          border: .02rem solid #cccccc
          border-radius:0.06rem
    .item-list
      .item
        line-height :.54rem
        color #666666
        padding-left:0.2rem      
</style>