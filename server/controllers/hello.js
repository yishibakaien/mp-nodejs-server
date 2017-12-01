// 自定义测试接口
module.exports = ctx => {
  var query = ctx.query

  ctx.state.data = {
    msg: '自定义接口 hello.js 返回值',
    query,
    text: 'some text'
  }
}