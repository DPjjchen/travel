export default {
  changeCity (ctx,city){
    //使用commit 
    ctx.commit('changeCity',city)
  }
}
