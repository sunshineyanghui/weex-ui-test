import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/views/news'
import WeexUi from '@/components/WeexUi'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
