import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Sample from './components/ExampleComponent.vue'

const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path:"/",

    },
    {
      path:"/sample/test",
      component:Sample
    }
  ],
})
// 生成したVueRouterインスタンスをエクスポート
export default router
