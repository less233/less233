import type { RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'
import utils from '@/utils'

const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    component: () => import('@/layouts/content'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: components['home'],
        meta: {
          title: '首页',
          activeMenu: 'home',
          auth: []
        }
      }
    ]
  }
]

const loginPage: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: components['login'],
    meta: {
      auth: []
    }
  }
]

const routes: RouteRecordRaw[] = [...basePage, ...loginPage]

export default routes
