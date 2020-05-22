import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () =>
    import ('../views/home/Home')
const Categroy = () =>
    import ('../views/category/Category')
const Shopcart = () =>
    import ('../views/shopcart/Shopcart')
const Profile = () =>
    import ('../views/profile/Profile')


//安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [{
        path: '',
        redirect: '/Home'
    },
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Category',
        component: Categroy
    },
    {
        path: '/Shopcart',
        component: Shopcart
    },
    {
        path: '/Profile',
        component: Profile
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router