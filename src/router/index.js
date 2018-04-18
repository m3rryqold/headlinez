import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import sources from '@/components/sources/home'
import list from '@/components/sources/list'
import headlines from '@/components/headlines/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sources',
      children: [
        {
          path: 'sources',
          name: 'sources-list',
          component: list,
        },
        {
          path: '/:source',
          name: 'sources-home',
          component: sources,
        }
      ]
    },
    {
      path: '/headlines',
      name: 'headlines',
      component: headlines
    }
  ],
})
