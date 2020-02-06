<template>
  <section>
    <h3>We are <strong>aroma</strong></h3>
    <h6>Welcome Back, Please login in your account</h6>
    <div class="col">
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="E-mail"
        v-model="user.email"
      >
      <input
        type="password"
        name="password"
        class="form-control mb-2"
        placeholder="******"
        v-model="user.password"
        @keypress.enter="login"
      >

      <!-- Handler templating -->
      {{user.password}}
      <!--{{1+1}}-->

    </div>
    <div class="form-group mb-2">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-md-2">
              <input type="checkbox" />
            </div>
            <div class="col">
              <small>Remember me</small>
            </div>
          </div>

        </div>
        <div class="col">
          <small>Forgot password?</small>
        </div>
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
        <div class="col">
          <button class="btn btn-gray  btn-block  btn-light ">Sign Up</button>
        </div>
      </div>
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
.btn-gray {
  background: gray !important;
  color: white !important;
}

.btn-black {
  background: #001;
  &:hover {
    background: rgb(71, 71, 71);
  }
}
</style>
