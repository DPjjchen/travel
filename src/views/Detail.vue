<template>
  <div>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    >
    </DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list='list' class="content"></DetailList>
  </div>
</template>

<script>
import DetailBanner from '../components/Detail/Banner'
import DetailHeader from '../components/Detail/Header'
import DetailList from '../components/Detail/List'
import axios from 'axios'
 
export default {
  name:'Detail', 
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
   methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }

 }
</script>

<style scoped lang='stylus'>
  .content
    height: 20rem
</style>