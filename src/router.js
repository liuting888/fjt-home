import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
//     {
//     path: '/login',
//     component: () =>
//         import('@/views/login/index'),
//     hidden: true
// },
{
    path: '/404',
    component: () =>
        import('@/views/404'),
    hidden: true
},
{
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'index',
    hidden: true,
    children: [{
        path: 'index',
        component: () =>
            import('@/views/index/index')
    }]
},
// {
//     path: '/index',
//     // component: Layout,
//     children: [{
//         path: '/',
//         name: '/',
//         component: () =>
//             import('@/views/index/index'),
//         meta: { title: '首页', icon: 'icon-shouyetianchong' }
//     }]
// },
// {

// {
//     path: '/content',
//     component: Layout,
//     redirect: '/content/index',
//     name: 'content',
//     meta: { title: '内容管理'},
//     children: [{
//         path: 'index',
//         name: 'content-list',
//         component: () =>
//             import('@/views/content/index'),
//         meta: { title: '内容管理', icon: 'icon-tupiantianchong' }
//     }, {
//         path: 'detail',
//         name: 'content-detail',
//         component: () =>
//             import('@/views/content/detail'),
//         meta: { title: '详情' },
//         hidden: true
//     }]
// },

{ path: '*', redirect: '/404', hidden: true }
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});