<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Weekend ></Weekend>
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/home/header';
import HomeSwiper from '../components/home/Swiper'
import Icons from '../components/home/Icons'
import Recommend from '../components/home/recommend'
import Weekend from '../components/home/Weekend'
import Footer from '../components/home/Footer'
export default {
  name: 'home',
  components: {
    Header,HomeSwiper ,Icons,Weekend ,
    Footer,Recommend
  }
}
</script>
