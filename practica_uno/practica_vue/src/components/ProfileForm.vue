<template src="./recursos/html/ProfileForm.html">
</template>

<script lang="js">
import { mapGetters } from 'vuex'
import Auth from '@/config/auth.js'
import { db } from '@/config/_firebase.js'
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
    let usuario = db.auth().currentUser
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
      let usuarioAcual = db.auth().currentUser

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
  },
  computed: {
    ...mapGetters({
      user: 'getUser' // ? Mapeamos nuestros getter registrados y los transformamos en una varible (data) para ser utlizado en nuestro componente
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss">
@import "./recursos/css/profile.css";
</style>
