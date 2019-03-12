<template>
  <div>
    <Header></Header>
    <Search :cities='cities'></Search>

    <CityList 
      :cities='cities' 
      :hot='hotCities'
      :letter='letter'
    ></CityList>

    <Alphabet 
      :cities='cities'
      @handleClick='handleCityClick'
    ></Alphabet>
  </div>
</template>

<script>
import axios from 'axios'

import Header from '../components/city/header'
import Search from '../components/city/search'
import CityList from '../components/city/List'
import Alphabet from '../components/city/Alphabet'

export default {
  name:'City',
  components:{
    Header,
    Search,
    CityList,
    Alphabet,
  },
  data(){
    return{
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res=res.data
      if(res.ret && res.data){
        const data=res.data
        this.cities =  data.cities
        this.hotCities = data.hotCities
      } 
    },
    handleCityClick(letter){
      this.letter = letter
    }

  },
  mounted(){
    this.getCityInfo()
  }

}
</script>

<style lang="stylus" scope>
  
</style>