// const mockdata = require('./public/city.json');

// module.exports={
//   devServer: {
//     port:8080,
//     before(app){
//       app.get('/city/list',(req,res,next)=>{
//         res.json(mockdata);
//       })
//     }
//   }
// }

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}