<template src="./recursos/html/Partidas.html">

</template>

<script lang="js">
import Auth from '@/config/auth.js'
import { db } from '@/config/_firebase.js'
import Partidas from '@/views/Juego/Partidas'
export default {
  name: 'partidas',
  components: {
    Partidas
  },
  data () { // Variables y metodos(funciones que vamos  a utilizar)
    return {
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        nombre: '',
        photo: ''
      }
    }
  },
  mounted () {
    let userC = db.auth().currentUser
    this.user.nombre = userC.displayName
    this.user.photo = userC.photoURL
  },
  methods: {
    Perfil () {
      this.$router.push({ name: 'profile' })
    },
    logout () {
      return Auth.logOut()
    }
  }
}
</script>
<style lang="scss">
@import "./../components/recursos/css/partidas.css";
/**/
</style>
