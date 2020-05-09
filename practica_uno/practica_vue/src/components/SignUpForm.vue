<template src="./recursos/html/SignUpForm.html">

</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/Alerts'
import { db } from '@/config/_firebase.js'

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
      let userU = db.auth().currentUser

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

      Auth.signUp(this.user).then(data => {
        data.user.updateProfile({
          displayName: this.user.name
        }).then(() => {})
      }).catch(errores => {
        this.showError = true
        this.errorMessage = errores.message
        this.errorCode = errores.code
      })
      setTimeout(() => {
        let userU = db.auth().currentUser

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
@import "./recursos/css/signup.css";
</style>
