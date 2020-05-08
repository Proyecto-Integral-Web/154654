<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-lg-5 left">
          <div class="contenedor">
            <div class="new"></div>
            <button
              class="btn btn-create"
              @click="crearPartida"
            >NEW GAME</button>
          </div>
        </div>
        <div
          class="col-lg-7 mt pt"
          style="background-color:#000; min-height:400px;"
        >
          <ProfileFormMain></ProfileFormMain>
          <Partida
            class="mt"
            style="background-color:transparent"
          ></Partida>
          <PartidaComponent></PartidaComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import { mapGetters } from 'vuex'
import ProfileFormMain from '@/components/ProfileFormMain'
import PartidaComponent from '@/components/PartidaComponent'
import Partida from '@/components/MainForm'
import fireApp from '@/config/_firebase.js'
import Auth from '@/config/auth'
export default {
  name: 'Main',
  components: {
    ProfileFormMain,
    Partida,
    PartidaComponent
  },
  beforeCreate: function () {
    document.body.className = 'main'
  },
  mounted () {
    this.user = Auth.getUser()
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    crearPartida () {
      this.user = Auth.getUser()
      let uid = this.user.uid
      // Escribe en la base de datos
      fireApp.firestore().collection('kachipu').add({
        participantes: [uid],
        name: [this.user.displayName == null ? 'Usuario' : this.user.displayName],
        'usuario_1': ' ',
        'usuario_2': ' ',
        'ganador': ' ',
        completed: false
      })
    }
  }
}
</script>

<style lang="scss">
@import "./../components/recursos/css/profilemain.css";
</style>>
