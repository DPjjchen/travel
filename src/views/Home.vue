<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <Icons></Icons>
  </div>
</template>

<script>
import Header from '../components/home/header';
import HomeSwiper from '../components/home/Swiper'
import Icons from '../components/home/Icons'
export default {
  name: 'home',
  components: {
    Header,HomeSwiper ,Icons
  }
}
</script>
