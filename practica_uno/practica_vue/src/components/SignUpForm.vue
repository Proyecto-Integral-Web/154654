<template>
  <section>
    <h3 class="title">We are <strong>aroma</strong></h3>
    <div class="col mb-3">
      <a class="subtitle text-center">
        Don't have an account? Register for free
      </a>
    </div>
    <div class="col">
      <input
        type="text"
        name="name"
        class="form-control mb-3"
        placeholder="Name"
        v-model="user.name"
      >
      <input
        type="number"
        name="Telephone"
        class="form-control mb-3"
        placeholder="Telephone"
        v-model="user.telephone"
      >
      <input
        type="email"
        name="email"
        class="form-control mb-3"
        placeholder="E-mail"
        v-model="user.email"
      >
      <input
        type="password"
        name="password"
        class="form-control mb-3"
        placeholder="********"
        v-model="user.password"
        @keypress.enter="signup"
      >

      <!-- Handler templating -->
      {{user.password}}
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
      <div class="row">
        <div class="col">
          <button
            class="btn btn_success btn-block btn-black btn-dark"
            @click="signup"
          >Sign Up</button>
        </div>

      </div>
    </div>
    <div class="col subtitle">
      <small>Already have an account?</small>
    </div>
    <div class="col">
      <button
        class="btn btn-gray  sign-up"
        @click="login"
      >Login</button>
    </div>

  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'SignUpForm',
  data () { // iteramos todas las variables y métodos que
    return {
      // sabemos que es una funcion porque tiene () y siempre va a regresarnos algo
      user: {
        name: '',
        telephone: '',
        email: 'mail@gmail.com',
        password: '1234568586'
      }
    }
  },
  created () {
    console.log('Estoy en created')
  },
  mounted () { // el lugar adecuado para ejecutar cualquier funcion preparatoria, como para checar si el usuario esta loggeado, la ubicación, etc.
    Auth.signUp(this.user)
    console.log('Estoy en mounted')
    // this.login()
  },
  methods: { // declarar todas las funciones que se van a usar, en este caso Login
    signup () {
      // Esta variable es de uso local en nuestro metodo
    /*  let user = {
        email: 'esto es local'
      } */
      console.log('soy el signup ')
      console.log(this.user.email)
      setTimeout(() => {
        // Luego de iniciar sesion nos envia a la pagina about
        this.$router.push({ name: 'about' })
      }, 1000)
    },
    login () {
      console.log('signup')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss">
strong {
  color: #3d6946 !important;
}
.title {
  font-family: montserrat !important;
}
.subtitle {
  font-size: 10pt !important;
  font-family: montserrat !important;
  text-align: center !important;
}
.sign-up {
  font-family: montserrat !important;
  &:hover {
    color: black !important;
  }
}
.btn-gray {
  background: transparent !important;
  color: #3d6946 !important;
  font-weight: bold !important;
  font-size: 10pt !important;
}

.btn-black {
  background: #000 !important;
  border-radius: 30px !important;
  border: solid transparent !important;
  &:hover {
    background: #3d6946 !important;
  }
}
</style>
