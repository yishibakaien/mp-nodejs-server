// 自定义测试接口
module.exports = ctx => {
  ctx.state.data = {
    msg: '自定义接口 hello.js 返回值',
    data: 'cqw天才'
  }
}