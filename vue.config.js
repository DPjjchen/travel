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
        //在target处 修改端口  即可与后端联调
        // 也可以填写 服务器的 IP地址
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}