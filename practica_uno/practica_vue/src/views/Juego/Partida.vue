<template>
  <section>
    <div class="partida h-100 p-5 m-5">
      <div class="row">
        <div class="col ">
          <button
            class="btn btn-black"
            @click="crearPartida"
          >
            Nueva Partida
          </button>
        </div>
      </div>
      <div class="row row-fluid">
        <div class="col col-sm-6 offset-3">
        </div>
      </div>
      <!--<h3>{{$route.params.no_partida.replace('-',' ')}}</h3>-->
      <div class="row">

        <div class="col col-sm-12 col-lg-6 p-2">
          <user-arena
            @opcion="getOpcion"
            :userOpcion="partida.usuario_1"
            :displayName="!user.displayName?partida.name[0]!== user.displayName?partida.name[0]:'':user.displayName"
          ></user-arena>
        </div>
        <div class="col col-sm-12 col-lg-6 p-2">

          <user-arena
            :displayName="!partida.name[1]"
            :userOpcion="partida.usuario_1!=''?partida.usuario_2:''"
            @opcion="partida.participantes[1] === user.uid?getOpcion:''"
          ></user-arena>
          <button
            v-if="!partida.name[1]"
            class="btn btn-outline-primary"
            @click="retar"
          >
            👾
          </button>
        </div>
      </div>
      <b>{{partida}}</b>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
import fireApp from '../../config/_firebase.js'
import Auth from '@/config/auth'

const partida = fireApp.firestore().collection('juego-1')

export default {
  name: 'Partida',
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.obtenerPartida(to.params.no_partida)
      vm.user = Auth.getUser()
      vm.crearPartida()
      // vm.$bind('user', Auth.getUser())
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: [],
      user: {}
    }
  },
  firestore: {
    partidas: fireApp.firestore().collection('juego-1')
  },
  // Helper para asignar objetos o variables que necesitan ser detectados en sus cambios para ejecutar metodos
  /* key: {
    deep: true,
    immediate: true,
    handler: function (val, oldVal) {

    }
  }, */
  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler (value) {
        this.user = Auth.getUser()
        // this.$bind('user', Auth.getUser())
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted () {
    this.user = Auth.getUser()
    // this.$bind('user', Auth.getUser())
  },
  methods: {
    // Metodo para generar nueva partida
    /* obtenerUsuarios (const {propertyName} = objectToDestruct;) {
      let cityRef = db.collection('cities').doc('SF')
      let getDoc = cityRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!')
          } else {
            console.log('Document data:', doc.data())
          }
        })
        .catch(err => {
          console.log('Error getting document', err)
        })
      // [END get_document]

      return getDoc
    }, */
    crearPartida () {
      this.user = Auth.getUser()
      let uid = this.user.uid
      // Escribe en la base de datos
      fireApp.firestore().collection('juego-1').add({
        participantes: [uid],
        name: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        usuario_1: '',
        usuario_2: '',
        ganador: ''

      })
    },
    //* Cargar los datos de la partida del firestore. El ID de la partida se obtiene del parametro de la ruta *//
    obtenerPartida (partida) {
      fireApp.firestore().collection('juego-1').doc(this.partida).get().then((result) => {
        console.log(result.data())
      })
    },
    retar () {
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid
      // *Escribe en la base de datos.
      this.partida.name.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(this.partida)
    },
    getOpcion (opcion) {
      let participantes = this.partida.participantes
      console.log(participantes.indexOf(this.user.uid))
      let data = {}
      if (this.partida.names[participantes.indexOf(this.user.uid)] !== opcion[1]) {
        return 0
      }

      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': opcion[0]
        }
      } else {
        data = {
          'usuario_2': opcion[0]
        }
      }
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(data)
    }
  }
}
</script>
<style lang="scss">
.partida {
  background-image: url(../../assets/vg3.jpg);
}
.btn-black {
  color: white !important;
}
b {
  color: white;
}
</style>
