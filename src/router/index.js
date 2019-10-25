import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 导入路由组件
import JoblistContainer from '@/components/tabbar/joblist'
import CompanyContainer from '@/components/tabbar/company'
import NewsContainer from '@/components/tabbar/news'
import MycenterContainer from '@/components/tabbar/mycenter'
import JobdetailContainer from '@/components/jobs/jobdetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/joblist',
      component: JoblistContainer
    },
    {
      path: '/company',
      component: CompanyContainer
    },
    {
      path: '/news',
      component: NewsContainer
    },
    {
      path: '/mycenter',
      component: MycenterContainer
    },
    {
      path: '/joblist/jobdetail',
      component: JobdetailContainer
    }
  ],
  linkActiveClass:'btm-active'
})
