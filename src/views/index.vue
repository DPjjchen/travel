<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


  export default {
    name:'index',
    components:{
    }
  }
</script>

<style scoped>

</style>