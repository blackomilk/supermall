import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    redirect: '/home',
    meta: { showTabbar: true },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showTabbar: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { 
      showTabbar: true,
      keepAlive: true,
      title: '首页'
    },
  },
  {
    path: '/category',
    name: 'Category',
    meta: { showTabbar: true,
      title: '分类'
    },
    component: () => import('../views/Category/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { showTabbar: false,
      title: '购物车'
    },
    component: () => import('../views/Cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { showTabbar: true,
      title: '我的'

     },
    component: () => import('../views/Profile/Profile.vue')
  },
  {
    path: '/goodsItemInfo',
    name: 'GoodsItemInfo',
    meta: { showTabbar: false,
      title: '商品详情'
    },
    component: () => import('../views/GoodsItemInfo/goodsiteminfo.vue')
  }

  // {
  //   path: '/about',
  //   name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log("savedPosition", savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})

export default router
