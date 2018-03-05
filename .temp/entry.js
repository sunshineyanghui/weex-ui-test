import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
import Vuex from 'vuex'
import * as filters from '@/filters'
import { sync } from 'vuex-router-sync'
import mixins from '@/mixins'
import store from '@/store'
// sync the router with the vuex store.
// this registers `store.state.route`

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
sync(store, router)
// register global mixins.
Vue.mixin(mixins)

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router, store }, App))

// router.push('/')
//就是上面这玩意让页面总是跳到默认页面
