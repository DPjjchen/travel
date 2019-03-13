<template>
  <div>
    <div class="search">
      <input 
        type="text" 
        class='search-input'
        placeholder="请输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div 
      class="search-content"
      v-show='keyword'
      ref="search"
    >
      <ul>
        <li 
          class="search-item border-bottom"
          v-for='item in list'
          :key='item.id'
          @click='handleCityClick(item.name)'
        >
          {{item.name}}
        </li>
        <li
          class="search-item border-bottom"
          v-show='hasNoData'
        >
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name:'Search',
  props:{
    cities:Object
  },
  data(){
    return{
      keyword:'',
        list:[],
        timer:null
    }
  },
  methods: {
    handleCityClick(city){
      //用 dispatch 将 数据 派发到store
      this.$store.dispatch('changeCity',city)
      this.keyword=''
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search,{click: true})
  },
  watch: {
    keyword(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list=[]
        return
      }
      this.timer = setTimeout( () => {
        const result = []
        for (let i in this.cities ){
          this.cities[i].forEach( (value) => {
            if(value.spell.indexOf(this.keyword)>-1 
            || value.name.indexOf(this.keyword)>-1){
              result.push(value)
            }
          })
          this.list = result
        }
      },100)
    }
  },
};
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>