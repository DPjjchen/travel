<template>
  <div>
    <ul class="list" >
      <li class="item" 
        v-for="item of letters"
        :key='item'
        :ref='item'
        @click='handleLetterClick'
        @touchstart.prevent='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'alphabet',
  props:{
    cities:Object
  },
  data(){
    return {
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated (){
     //startY  获取字母A 到顶部 的距离 
        this.startY = this.$refs['A'][0].offsetTop
  },
  methods:{
    handleLetterClick(e){
      //发送 被点 节点的属性 给 父组件
      this.$emit('handleClick',e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus = true
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout( () => {
          //touchY  计算滑动停止时 距离顶部的距离
          const touchY = e.touches[0].clientY - 79
          //index  计算 当前字母的序列
          const index = Math.floor((touchY - this.startY)/20)
          if(index>=0 && index<this.letters.length){
            this.$emit('handleClick',this.letters[index])
          }
        },16)
        }
        
    },
    handleTouchEnd(){
      this.touchStatus = false
    },
  },
  computed: {
    letters() {
      const letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
};
</script>

<style scoped lang='stylus'>
   @import '../../assets/varibles.styl'
   .list
     display:flex
     flex-direction column
     justify-content center
     position:absolute
     top 1.58rem
     right 0
     bottom 0
     width 0.4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>