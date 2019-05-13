// 七牛上传插件
const QiniuPlugin = require('qiniu-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

//模拟数据
const express = require('express')
const app = express()
var apiRoutes = express.Router();
app.use('/api', apiRoutes)

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    baseUrl: '/',

    // 放置静态资源的地方 (js/css/img/font/...)
    // assetsDir: '',

    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,

    // 使用带有浏览器内编译器的完整构建版本
    // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
    // compiler: false,

    // babel-loader 默认会跳过 node_modules 依赖。
    // 通过这个选项可以显式转译一个依赖。
    transpileDependencies: [ /* string or regex */ ],

    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,

    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: () => {},

    configureWebpack: () => {},

    // CSS 相关选项
    css: {
        sourceMap: true,
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 54 //按照1280设计稿来转换
                    })

                ]
            }
        }
    },

    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
    pwa: {},

    // 配置 webpack-dev-server 行为。
    devServer: {
        //模拟数据开始
        before(app) {
            app.get('/api/seller', (req, res) => {
                res.json({
                    // 这里是你的json内容
                    errno: 0,
                    data: seller
                })
            })
        },
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        open: true,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: 'http://localhost:8080', // string | Object
        before: app => {}
    },

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            if (process.env.npm_lifecycle_event === 'analyze') {
                config.plugins.push(
                    new BundleAnalyzerPlugin()
                );
            }

        } else {
            // 为开发环境修改配置...
        }

    },

    // 第三方插件的选项
    pluginOptions: {

    }
}