<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Home from './Home'

  export default {
    name:'index',
    components:{
      Home
    }
  }
</script>

<style scoped>

</style>