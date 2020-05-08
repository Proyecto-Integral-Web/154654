import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { auth } from './config/_firebase'
import 'animate.css'
/**/
import { firestorePlugin } from 'vuefire'
// Librerias de usuario
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(firestorePlugin) // agregamos bootstrap

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
  store.dispatch('setUser', user)
})
// Metodo de comprobacion de permiso de acceso

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permiso para entrar')
    // Traemos info del usuario actual
    let user = store.state.user.user
    // Comprobamos que si haya usuario
    if (!store.state.user.logged) {
      next({
        name: 'login'
      })
      return
    }
    // Si hay usuario ingresamos a la ruta
    console.log(`Usuario logeado : ${user.email}`, store.state.user.logged)
    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
