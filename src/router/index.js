import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/biblioteca',
    name: 'biblioteca',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/biblioteca/biblioteca.vue')
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/secretaria/secretaria.vue'),
  },
  {
    path: '/secretaria/minhas-solicitacoes',
    name: 'secretaria.minhas.solicitacoes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "secretaria.minhas.solicitacoes" */ '../views/secretaria/minhas-solicitacoes.vue')
  },
  {
    path: '/secretaria/minhas-solicitacoes/nova-solicitacao',
    name: 'secretaria.minhas-solicitacoes.nova-solicitacao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "nova-solicitacao" */ '../views/secretaria/nova-solicitacao.vue')
  },
  {
    path: '/jornal-uninove',
    name: 'jornal-uninove',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/jornal-uninove/home.vue')
  },
  {
    path: '/cursos-livres',
    name: 'cursos-livres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/cursos-livres/home.vue')
  },
  {
    path: '/nineflix',
    name: 'nineflix',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/nineflix/home.vue')
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/eventos/home.vue')
  }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
})

export default router
