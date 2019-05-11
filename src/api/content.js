import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/queryArticles',
    method: 'post',
    data:params
  })
}

/**
 * @description: 查询文章评论列表
 * @param {type} artId：文章编号， flag
 * @param {type} flag： 条1查询所有，空查询两条，默认为空
 * @return: 
 */
export function queryArticleComments(params) {
  return request({
    url: '/queryArticleComments',
    method: 'post',
    data:params
  })
}
/**
 * @description: 设置为精选
 * @param {type} id：文章编号， flag
 * @param {type} userId 用户编号
 * @param {type} handpick 评论编号
 * @return: 
 */
export function handpickArticle(params) {
  return request({
    url: '/handpickArticle',
    method: 'post',
    data:params
  })
}
/**
 * @description: 删除文章
 * @param {type} id：文章编号， flag
 * @param {type} userId 用户编号
 * @param {type} handpick 评论编号
 * @return: 
 */
export function deleteComment(params) {
  return request({
    url: '/deleteArticle',
    method: 'post',
    data:params
  })
}