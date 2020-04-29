<template>
  <section>
    <h3 class="title"><small>Register in </small><strong>passionfruits.</strong></h3>
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
        type="email"
        name="email"
        class="form-control mb-3"
        placeholder="E-mail"
        v-model="user.email"
        @keypress="showError = false"
      >
      <input
        type="password"
        name="password"
        class="form-control mb-3"
        placeholder="********"
        v-model="user.password"
        @keypress.enter="signup"
      >
      <div
        class="alert-campos"
        id="alert-campos"
      >Todos los campos son obligatorios</div>

    </div>

    <div class="form-group mb-3">

      <alerts-component
        v-if="showError"
        :message="errorMessage"
        :code="errorCode"
      >
      </alerts-component>

      <div class="row">

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

    </div>
    <div class="col">
      <button
        class="btn btn-gray  sign-up"
        @click="login"
      > <small>Already have an account?</small></button>
    </div>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/Alerts'
import Firebase from '@/config/_firebase.js'
export default {
  name: 'SignUpForm',
  components: {
    AlertsComponent
  },
  data () { // iteramos todas las variables y métodos que
    return {
      // sabemos que es una funcion porque tiene () y siempre va a regresarnos algo
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        name: '',
        telephone: '',
        email: '',
        password: ''
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
    updateProfile () {
      let userU = Firebase.auth().currentUser

      userU.updateProfile({
        displayName: this.user.name

      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.table(error)
      })
    },
    signup () {
      // Esta variable es de uso local en nuestro metodo
    /*  let user = {
        email: 'esto es local'
      } */
      console.log('soy el signup')
      console.log(this.user.email)

      Auth.signUp(this.user).catch(errores => {
        this.showError = true
        this.errorMessage = errores.message
        this.errorCode = errores.code
      })
      setTimeout(() => {
        let userU = Firebase.auth().currentUser

        userU.updateProfile({
          displayName: this.user.name

        }).then((result) => {
          console.log(result)
        }).catch((error) => {
          console.table(error)
        })
      }, 1000)// Logica de hugo para obtener el nombre de la base de datos
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
  color: oran !important;
}
#alert-password,
#alert-email,
#alert-email-in-use,
#alert-campos {
  display: none;
}
.alert-campos {
  color: red;
  font-size: 9pt;
}
.title {
  font-family: montserrat !important;
}
.subtitle {
  font-size: 10pt !important;
  font-family: montserrat !important;
  text-align: center !important;
  color: #e6e6e6;
}
.sign-up {
  font-family: montserrat !important;
  &:hover {
    color: white !important;
  }
}
.btn-gray {
  background: transparent !important;
  color: #95b2e7 !important;
  font-weight: bold !important;
  font-size: 10pt !important;
}

.btn-black {
  background: #9bb3cf !important;
  border-radius: 30px !important;
  border: solid transparent !important;
  &:hover {
    background: #6d8dc9 !important;
  }
}
</style>
