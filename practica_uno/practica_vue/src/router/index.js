import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Partida from '../views/Juego/Partida.vue'
import Marcador from '../views/Juego/Marcador.vue'
import Partidas from '../views/Juego/Partidas.vue'
import UserArena from '../components/Juego/UserArena.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  // Agregamos nueva ruta
  {
    path: '/',
    name: 'login', // asignamos nombre, debe ser único y original
    component: Login, // Declaramos componente
    meta: {
      auth: false
    }
  },
  {
    path: '/signup',
    name: 'signup', // asignamos nombre, debe ser único y original
    component: SignUp // Declaramos componente
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      auth: true // Se utiliza para controlar
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
    meta: {
      auth: true // Se utiliza para controlar
    }
  },
  {
    // rutas dinamicas, donde no_partida puede ser diferente para cargar dicha partida
    path: '/kachipu/',
    name: 'partidas', // asignamos nombre, debe ser único y original
    component: Partida,
    meta: {
      auth: true
    },
    children: [{
      path: ':no_partida',
      name: 'partida',
      component: UserArena,
      meta: {
        auth: true
      }
    }] // Declaramos componente
  },
  {
    // rutas dinamicas, donde no_partida puede ser diferente para cargar dicha partida
    path: '/partidas2',
    name: 'partidas2', // asignamos nombre, debe ser único y original
    component: Partidas // Declaramos componente
  },
  {
    path: '/marcador',
    name: 'marcador',
    component: Marcador
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      auth: true // Se utiliza para controlar
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
