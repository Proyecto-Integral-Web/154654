<template src="./recursos/html/LoginForm.html"></template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/Alerts'
export default {
  name: 'LoginForm',
  components: {
    AlertsComponent // Lo registramos como componente
  },
  data () { // iteramos todas las variables y métodos que
    return {
      // sabemos que es una funcion porque tiene () y siempre va a regresarnos algo
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        email: '',
        password: ''
      },
      userEmail: {
        userPassword: ''
      }
    }
  },
  created () {
    console.log('Estoy en created')
  },
  mounted () { // el lugar adecuado para ejecutar cualquier funcion preparatoria, como para checar si el usuario esta loggeado, la ubicación, etc.
    console.log('Estoy en mounted')
    // this.login()
  },
  methods: { // declarar todas las funciones que se van a usar, en este caso Login
    login () {
      // Esta variable es de uso local en nuestro metodo
    /*  let user = {
        email: 'esto es local'
      } */
      console.log('soy el login ')
      console.log(this.user.email)
      // Aqui llamo la funcion login de mi archivo auth.js
      Auth.login(this.user).catch(error => {
        console.log('Estoy en LoginForm')
        console.log('Esto es un error:' + error.code, error.message)
        // alert('Esto es un error')
        // document.getElementById('alert-error').style.display = 'block'
        this.showError = true
        this.errorMessage = error.message
        this.errorCode = error.code
      })
      /* setTimeout(() => {
        // Luego de iniciar sesion nos envia a la pagina about
        this.$router.push({ name: 'about' })
      }, 1000) */
      /* setTimeout(() => {
        this.showError = false
      }, 700) */
    },
    signup () {
      console.log('signup')
      this.$router.push({ name: 'signup' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss">
@import "./recursos/css/login.css";
</style>
