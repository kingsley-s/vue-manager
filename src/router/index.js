import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: resolve => require(['../components/common/login.vue'], resolve)
  },
  {
    path: '/index',
    component: resolve => require(['../components/common/index.vue'], resolve),
    children: [{
      path: '/user-power',
      component: resolve => require(['../components/pages/userPower.vue'], resolve)
    },
    {
      path: '/menu-roleList',
      component: resolve => require(['../components/pages/roleList.vue'], resolve)
    },
    {
      path: '/menu-addRole',
      component: resolve => require(['../components/pages/addRole.vue'], resolve)
    },
    {
      path: '/count-chart',
      component: resolve => require(['../components/pages/chart.vue'], resolve)
    },
    {
      path: '/product-add',
      component: resolve => require(['../components/pages/productAdd.vue'], resolve)
    },
    {
      path: '/files-add',
      component: resolve => require(['../components/pages/pageAdd.vue'], resolve)
    }]
  }
  ]
})
