import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/views/news'
import Cover from '@/views/cover'
import Weixin from '@/views/weixin'
import WeexUi from '@/components/WeexUi'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/weexui',
      name: 'WeexUi',
      component: WeexUi
    },
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path:'/weixin',
      name: 'Weixin',
      component: Weixin
    },
  ]
})
