import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/queryUsers',
    method: 'post',
    data:params
  })
}
/**
 * @description: 查询用户积分详情
 * @param {type} params 
 * @return: 
 */
export function queryUserPoints(params) {
  return request({
    url: '/queryUserPoints',
    method: 'post',
    data:params
  })
}