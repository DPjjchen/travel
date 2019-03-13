let defaultCity = '城市'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e) {alert(e)}

export default {
  city: defaultCity
}