<template>
  <div>
    <div class="search">
      <input 
        type="text" 
        class='search-input'
        placeholder="请输入城市名或拼音"
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='stylus'>
  @import '../../assets/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background  $bgColor 
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      box-sizing: border-box
      text-align center
      border-radius .06rem
      color #666
</style>