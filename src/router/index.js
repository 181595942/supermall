import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home')
const Cart = ()=>import('views/cart/Cart')
const Category = ()=>import('views/category/category')
const Me = ()=>import('views/me/Me')

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/me',
        component:Me
    },
]
const router = new VueRouter({
    // mode: 'history',
    routes
   
})
// const VueRouterPush = Router.prototype.push 
// Router.prototype.push = function push (to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }

// //replace
// const VueRouterReplace = Router.prototype.replace
// Router.prototype.replace = function replace (to) {
//   return VueRouterReplace.call(this, to).catch(err => err)
// }
export default router

