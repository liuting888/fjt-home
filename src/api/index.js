import request from '@/utils/request'

export function getIndexPage(params) {
  return request({
    url: 'getIndexPage',
    method: 'post',
    params
  })
}

export function getIndexPageCityData(params) {
  return request({
    url: 'getIndexPageCityData',
    method: 'post',
    data:{
      city:params
    }
  })
}