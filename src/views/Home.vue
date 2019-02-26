<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper></HomeSwiper>
 
  </div>
</template>

<script>
import Header from '../components/header';
import HomeSwiper from '../components/home/Swiper'
export default {
  name: 'home',
  components: {
    Header,HomeSwiper 
  }
}
</script>
