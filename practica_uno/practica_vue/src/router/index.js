import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  // Agregamos nueva ruta
  {
    path: '/',
    name: 'login', // asignamos nombre, debe ser único y original
    component: Login, // Declaramos componente
    meta: {
      authorization: false
    }
  },
  {
    path: '/signup',
    name: 'signup', // asignamos nombre, debe ser único y original
    component: SignUp // Declaramos componente
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router