<template>
  <section>
    <alerts-component
      v-if="showError"
      :message="errorMessage"
      :code="errorCode"
    ></alerts-component>
    <div class="col">
      <img
        class="img-fluid w-50 h-50 m-3"
        :src="user.photo"
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
        type="email"
        name="email"
        class="form-control mb-3"
        placeholder="E-mail"
        v-model="user.email"
      >
      <input
        type="text"
        v-model="user.photo"
        class="form-control mb-2 text-center"
      >

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
          <button
            class="btn btn_success btn-block log-out"
            @click="updateInfo"
          ><small><strong>Update</strong></small></button>
        </div>

      </div>
    </div>
  </section>

</template>

<script lang="js">
import Auth from '@/config/auth.js'
import Firebase from '@/config/_firebase.js'
import AlertsComponent from '@/components/helpers/Alerts'

export default {
  name: 'ProfileForm',
  component: { AlertsComponent },
  data () { // iteramos todas las variables y métodos que
    return {
      usuario: Auth.checkUser(),
      showError: false,
      errorMessage: '',
      errorCode: '',
      // sabemos que es una funcion porque tiene () y siempre va a regresarnos algo
      user: {
        name: '',
        email: '',
        photo: ''
      }
    }
  },
  created () {
    console.log('Estoy en created')
    // var user = Auth.currentUser
    // this.name = user.displayName
    let usuario = Firebase.auth().currentUser
    this.user.name = usuario.displayName
    this.user.email = usuario.email
    this.user.photo = usuario.photoURL
  },
  mounted () { // el lugar adecuado para ejecutar cualquier funcion preparatoria, como para checar si el usuario esta loggeado, la ubicación, etc.
    console.log('Estoy en mounted')
    this.usuario = Auth.checkUser()
    // this.login()
  },
  methods: {
    name: 'profile',
    logOut () {
      return Auth.logOut()
    },
    login () {
      Auth.login(this.usuario)
    },
    updateInfo () {
      let usuarioAcual = Firebase.auth().currentUser

      usuarioAcual.updateProfile({
        displayName: this.user.name,
        email: this.user.email,
        photoURL: this.user.photo
      }).then((result) => {
        console.log(result)
        return alert('Update')
      }).catch((err) => {
        console.table(err)
        this.showError = true
        this.errorMessage = err.message
        this.errorCode = err.code
      })
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
