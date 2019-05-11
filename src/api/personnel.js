import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/queryUsers',
    method: 'post',
    data:params
  })
}
/**
 * @description: 查询用户信息
 * @param {type} params userId
 * @return: 
 */
export function queryOneUser(params) {
  return request({
    url: '/queryOneUser',
    method: 'post',
    data:params
  })
}
/**
 * @description: 查询用户发帖列表
 * @param {type} params userId
 * @return: 
 */
export function queryArticles(params) {
  return request({
    url: '/queryArticles',
    method: 'post',
    data:params
  })
}
/**
 * @description: 删除文章
 * @param {type} params userId，id
 * @return: 
 */
export function deleteArticle(params) {
  return request({
    url: '/deleteArticle',
    method: 'post',
    data:params
  })
}
/**
 * @description: 修改用户信息
 * @param {type} params updateUser
 * @return: 
 */
export function updateUser(params) {
  return request({
    url: '/updateUser',
    method: 'post',
    data:params
  })
}