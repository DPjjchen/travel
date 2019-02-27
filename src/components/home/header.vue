

<template>
  <div class='header'>
    <div class="header-left">
      <span class="iconfont header-left-icon">&#xe68e;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe617;</span>
      请输入想去的地方
    </div>
    <router-link to='/city'>
      <div class="header-right">
        城市
        <span class="iconfont">&#xe682;</span>
      </div>
    </router-link>
    
  </div>
</template>

<script>
 
  export default {
    name:'HomeHeader',
    
  }
</script>

<style scoped lang='stylus'>
   @import '../../assets/varibles.styl'

  .header
    display :flex
    background-color:$bgColor;
    height:$headerHeight
    color :#fff
    line-height :$headerHeight
    .header-left
      width:1.2rem 
      float:left
      .header-left-icon
        text-align center
        font-size 0.4rem
        margin-left  0.4rem
    .header-input
      flex:1
      line-height: 0.64rem;
      height 0.64rem
      margin-top 0.11rem
      background #ffffff
      border-radius:0.1rem
      color #ccc
      text-align center
    .header-right
      width:1.2rem
      float:right
      text-align center
      color #fff

</style>
