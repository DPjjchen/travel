<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <Icons :list="iconList"></Icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
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
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    Header,HomeSwiper ,Icons,Weekend ,
    Footer,Recommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city){
      this.lastCity =this.city
      this.getHomeInfo()
    }
  },
}
</script>
