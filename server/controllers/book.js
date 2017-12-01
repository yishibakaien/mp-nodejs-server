// 连接数据库测试 接口
const {mysql} = require('../qcloud')

module.exports = async ctx => {
  // var book = {
  //   book_name: '鬼吹灯2',
  //   book_price: '1200',
  //   book_author: '本物天下霸唱',
  //   book_desc: '盗墓小说开山之作'
  // }
  // 插入数据库
  // await mysql('books').insert(book)
  
  var query = ctx.query

  // 查找数据库
  var res = await mysql('books').where({book_index: query.book_index})
  
  // 返回值
  ctx.state.data = res
}