<template>
  <section class="section">
    <div class="col columnaDer">
      <div class="tab-main mx-auto columnaDer">
        <input
          id="tab1"
          type="radio"
          name="tabs"
          checked
        />
        <label for="tab1">Partidas propias</label>
        <input
          id="tab2"
          type="radio"
          name="tabs"
        />

        <label for="tab2">Partidas disponibles</label>
        <section id="content1">
          <ul class="list-group">
            <li
              v-for="partida in partidasSort"
              :key="partida.id"
              class="list-group-item "
            >
              <div class="row">
                <div class="col">
                  <h3 class="animated infinite pulse">🏆</h3>
                </div>
                <div class="col">
                  <h4 v-if="partida.participantes.includes(user.uid)">⭐</h4>
                </div>
                <div
                  v-if="partida.usuario_1==='' || partida.usuario_2===''"
                  class="col"
                >
                  <h4
                    class="animated infinite pulse"
                    v-if="partida.usuario_1==='' && partida.participantes.indexOf(user.uid) === 0"
                  >
                    ⏰
                  </h4>
                  <h4
                    class="animated infinite pulse"
                    v-if="partida.usuario_2==='' && partida.participantes.indexOf(user.uid) === 1"
                  >
                    ⏰
                  </h4>
                </div>
                <div
                  v-if="partida.usuario_1===''"
                  class="col"
                >
                  <h4 class="animated infinite pulse">1️⃣</h4>
                </div>
                <div
                  v-if="partida.usuario_2===''"
                  class="col"
                >
                  <h4 class="animated infinite pulse">2️⃣</h4>
                </div>
              </div>
              <h4>{{partida.ganador_text}}</h4>
              <br />
              <strong>Player 1: </strong> {{partida.names[0]}}
              <br />
              <strong>Player 2: </strong> {{partida.names[1]?partida.names[1]:'Sin Retador'}}
              <br />
              <strong>Creada:</strong>
              {{moment(partida.created_at.toDate()).format('LLL')}}
              <br />
              <div class="btn-group">
                <button
                  class="btn mb-2 btn-outline-info btn-sm animated infinite"
                  :class="partida.names.length===1?'pulse':''"
                  @click="$router.push({name:'partida',params:{no_partida:partida.id}}).catch(err => {})"
                >
                  {{partida.participantes.length===1&&!partida.participantes.includes(user.uid)
                ?'Retar':'Ver'}}
                </button>
              </div>
            </li>
          </ul>
        </section>
        <section id="content2">
          <label>asdasd</label>
        </section>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import Auth from '@/config/auth.js'
import { mapGetters } from 'vuex'
import { db, Timestamp } from '@/config/_firebase.js'
// import Partidas from '@/views/Juego/Partidas'
import collect from 'collect.js'
import moment from 'moment'
export default {
  name: 'partidas',
  components: {
  },
  data () { // Variables y metodos(funciones que vamos  a utilizar)
    return {
      userData: {},
      collect,
      moment,
      Timestamp,
      partidasSort: [],
      partidas: []
    }
  },
  firestore: {
    partidas: db.collection('kachipu')
  },
  watch: {
    partidas: {
      deep: true,
      immediate: true,
      handler: function (val) {
        this.partidasSort = collect(val).sortByDesc('created_at').all()
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
