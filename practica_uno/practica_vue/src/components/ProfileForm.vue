<template>
  <section>

    <div class="col">
      <img
        class="img-fluid w-50 h-50 m-3"
        src="../assets/profilepic.jpg"
      >
      <div class="col mb-3">
        <a class="subtitle text-center">
          <h6 class="title">{{user.name}}</h6>
        </a>
      </div>
      <input
        type="text"
        name="name"
        class="form-control mb-3"
        placeholder="hola"
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

      <!-- Handler templating -->
      <!--{{user.password}}-->
      <!--{{1+1}}-->

    </div>
    <div class="form-group mb-3">
      <div class="row">
      </div>
    </div>
    <div class="form-group mb-2">
      <div class="row">
        <div class="col">

        </div>

      </div>
    </div>
    <div class="form-group mb-2">
      <div class="row">
        <div class="col">
          <button
            class="btn btn_success btn-block log-out"
            @click="logOut"
          ><small><strong>Log Out</strong></small></button>
        </div>

      </div>
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
        name: 'Ericka',
        telephone: '6567977029',
        email: 'erickasanchezc1998@gmail.com'
      }
    }
  },
  created () {
    console.log('Estoy en created')
    var user = Auth.currentUser
    this.name = user.displayName
  },
  mounted () { // el lugar adecuado para ejecutar cualquier funcion preparatoria, como para checar si el usuario esta loggeado, la ubicación, etc.
    console.log('Estoy en mounted')
    // this.login()
  },
  methods: {
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss">
strong {
  color: gray !important;
  &:hover {
    color: black !important;
  }
}
.title {
  font-family: montserrat !important;
}
.subtitle {
  font-size: 10pt !important;
  font-family: montserrat !important;
  text-align: center !important;
}
.log-out {
  color: gray !important;
  font-family: montserrat !important;
  font-weight: bolder !important;
  &:hover {
    color: black !important;
  }
}
</style>
