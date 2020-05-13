<template>
  <section class="formulario">
    <h3 class="title">WANNA<br><strong>PLAY?</strong></h3>

    <div class="col mb-3">
      <a class="subtitle text-center text-light">

      </a>
    </div>
    <div class="col">
      <small class="text-light">Name:</small>
      <input
        class="form-control mb-3"
        name="email"
        type="email"
        placeholder="E-mail"
        v-model="user.email"
        @keypress="showError=false"
      >
      <small class="text-light">Password</small>
      <input
        class="form-control mb-3"
        name="password"
        type="password"
        placeholder="********"
        v-model="user.password"
        @keypress.enter="login"
        @keypress="showError=false"
      >

      <!-- Handler templating -->
      <!--{{user.password}}-->
      <!--{{1+1}}-->

    </div>
    <div class="form-group mb-3">
      <div class="row">
        <!-- <div class="col">
          <div class="row">
            <div class="col-md-2">
              <input type="checkbox" />
            </div>
            <div class="col">
              <small>Remember me</small>
            </div>
          </div>

        </div>-->
        <!--<div class="col">
          <small>Forgot password?</small>
        </div>-->
      </div>
    </div>
    <div class="form-group mb-2">
      <!--<div
        class="alert alert-danger"
        role="alert"
        id="alert-error"
      >
        <strong></strong> <a
          href="#"
          class="alert-link"
        >E-mail or password are incorrect </a> Try again.
      </div>-->
      <AlertsComponent
        v-if="showError"
        :message="errorMessage"
        :code="errorCode"
      >
      </AlertsComponent>
      <div class="row">
        <div class="col">
          <button
            class="btn btn_success btn-block btn-black btn-dark"
            @click="login"
          >Login</button>
        </div>

      </div>
    </div>
    <div class="col subtitle">

    </div>
    <div class="col">
      <button
        class="btn btn-gray sign-up"
        @click="signup"
      ><small>Don't have an account?</small></button>

    </div>

  </section>
</template>

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
        password: '',
        nombre: ''
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
