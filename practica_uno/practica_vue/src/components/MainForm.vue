<template src="./recursos/html/Partidas.html">

</template>

<script lang="js">
import Auth from '@/config/auth.js'
import { mapGetters } from 'vuex'
import { db } from '@/config/_firebase.js'
import Partidas from '@/views/Juego/Partidas'
export default {
  name: 'partidas',
  components: {
    Partidas
  },
  data () { // Variables y metodos(funciones que vamos  a utilizar)
    return {
      userData: {}
    }
  },
  mounted () {
    let userC = db.auth().currentUser
    this.getUser()
    this.user.nombre = userC.displayName
    this.user.photo = userC.photoURL
  },

  methods: {
    Perfil () {
      this.$router.push({ name: 'profile' })
    },
    logout () {
      return Auth.logOut()
    },
    getUser () {
      this.userData = Auth.getUser()
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser' // ? Mapeamos nuestros getter registrados y los transformamos en una varible (data) para ser utlizado en nuestro componente
    })
  }
}
</script>
<style lang="scss">
@import "./../components/recursos/css/partidas.css";
/**/
</style>
