<template>
  <section>
    <h3 class="title">We are <strong>aroma</strong></h3>
    <div class="col mb-3">
      <a class="subtitle text-center">
        Welcome Back! please login in your account
      </a>
    </div>
    <div class="col">
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
        @keypress.enter="login"
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
            @click="login"
          >Login</button>
        </div>

      </div>
    </div>
    <div class="col subtitle">
      <small>Don't have an account?</small>
    </div>
    <div class="col">
      <button class="btn btn-gray  sign-up">Sign Up</button>
    </div>

  </section>
</template>

<script lang="js">
export default {
  name: 'LoginForm',
  data () { // iteramos todas las variables y métodos que
    return {
      // sabemos que es una funcion porque tiene () y siempre va a regresarnos algo
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
      setTimeout(() => {
        // Luego de iniciar sesion nos envia a la pagina about
        this.$router.push({ name: 'about' })
      }, 1000)
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
