import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'
import 'animate.css'
/**/
import { firestorePlugin } from 'vuefire'
// Librerias de usuario
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(firestorePlugin) // agregamos bootstrap

Vue.config.productionTip = false

/* firebase.onAuthStateChanged(user => {
  store.dispatch('setUser', user)
}) */
// Metodo de comprobacion de permiso de acceso

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permiso para entrar')
    // Traemos info del usuario actual
    let user = await Auth.checkUser()
    console.log(user)
    // Comprobamos que si haya usuario
    if (user == null) {
      // Si no hay usuario lo mandamos al login
      next({
        name: 'login'
      })
      return
    }
    // Si hay usuario ingresamos a la ruta
    console.log('Usuario logeado')
    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
