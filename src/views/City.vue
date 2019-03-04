<template>
  <div>
    <Header></Header>
    <Search></Search>
    <CityList></CityList>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
import Header from '../components/city/header'
import Search from '../components/city/search'
import CityList from '../components/city/List'
import Alphabet from '../components/city/Alphabet'
export default {
  name:'City',
  components:{
    Header,Search,CityList,Alphabet
  }
}
</script>

<style lang="stylus" scope>
  
</style>