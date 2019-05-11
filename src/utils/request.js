import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import qs from 'qs';//转换request payload为Form Data
// 创建axios实例


var BASE_API = '';
if (process.env.NODE_ENV == 'production') {
    BASE_API = getRealPath();//线上环境
} else {
    // BASE_API = "http://193.112.153.155:3001";//开发环境
    BASE_API = "http://172.16.10.162:8080/PoliceCommunity";//开发环境
    // BASE_API = "http://172.16.10.59:8080/Auxpolice1.0";//开发环境
    // BASE_API = getRealPath();//开发环境
}
const service = axios.create({
    // baseURL: "http://193.112.153.155:3001", // api的base_url
    baseURL: BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    //   if (store.getters.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    //   };
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";//转换request payload为Form Data
    // if (store.getters.token) { //暂时不做权限判断，没有令牌
    //     config.headers.Authorization = `Bearer ${getToken()}`;
    // }
    //使用qs,将数据转为Json格式
    config.data = qs.stringify(config.data);
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
        * code为非20000是抛错 可结合自己业务进行修改
        */
        const res = response.data
        console.log(response)
        console.log(response.resultCode)
        if (res.resultCode != 0) {
            Message({
                message: res.resultMsg,
                type: 'error',
                duration: 5 * 1000
            })

            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload()// 为了重新实例化vue-router对象 避免bug
                    })
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
function getRealPath() {//获取项目路径
    var localObj = window.location;
    var contextPath = localObj.pathname.split("/")[1];
    // var basePath = localObj.protocol + "//" + localObj.host + "/"+ contextPath + "/";
    var basePath = localObj.protocol + "//" + localObj.host + "/";
    return basePath;
}
export default service
