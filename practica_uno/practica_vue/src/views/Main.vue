<template>
  <div class="container">
    <div>
      <div class="row">
        <div
          class="col-lg-9 left"
          style="background-color:whitesmoke;"
        >
          <div class="contenedor">

            <div class="">
              <center>
                <Ganador></Ganador>
              </center>
              <div
                class=""
                style="background-color:white; height:200px; width:100%;"
              ></div>
            </div>

            <!---->
            <!-- <div class="p-5">
              <h1 class="tituloJuego">{{$route.params.no_partida.replace('-',' ')}}</h1>
              <div class="row row-fluid">

                <div class="col col-md-2">

                  <button
                    v-if="!partida.name[1]"
                    class="btn"
                    @click="retar"
                  >💰</button>
                </div>
                <div class="col mr-3">
                  <div class="contadores">
                    <div>
                      <h5> Ganador: {{partida.ganador_nombre}}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mr-3">
              <div class="col col-sm-12 col-lg-8 p-2 bg-light">
                <UserArena
                  @opcion="getOpcion"
                  :userOpcion="partida.usuario_2!=''||(partida.participantes[0] === user.uid) ? partida.usuario_1:(partida.usuario_1 && partida.usuario_2)?partida.usuario_1:''"
                  :displayName="!user.displayName?partida.name[0]!== user.displayName?partida.name[0]:'':user.displayName"
                ></UserArena>
              </div>
              <div
                class="col col-sm-12 col-lg-4 p-2"
                style="background-color:black;"
              >
                <UserArena
                  @opcion="getOpcion"
                  :userOpcion="partida.usuario_1!=''||(partida.participantes[1] === user.uid) ? partida.usuario_2:(partida.usuario_1 && partida.usuario_2)?partida.usuario_2:''"
                  :displayName="!partida.name[1]?'Esperando Retador':partida.name[1]"
                ></UserArena>
              </div>
            </div>-->
          </div>
        </div>
        <div class="col-lg-3">
          <div class="row">
            <div
              class="col-lg-12 col-sm-12 pt"
              style="background-color:#fff;"
            >
              <ProfileFormMain></ProfileFormMain>
              <button
                class="btn btn-create"
                @click="crearPartida"
              >NEW GAME</button>
            </div>

            <div
              class="col-lg-12 col-sm-12"
              style="background-color:#000; min-height:200px;"
            >
              <Partida></Partida>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import { mapGetters } from 'vuex'
import ProfileFormMain from '@/components/ProfileFormMain'
import Partida from '@/components/MainForm'
import Ganador from '@/components/Juego/Ganador'
import { db } from '@/config/_firebase.js'
import Auth from '@/config/auth'
const partidas = db.collection('kachipu')
export default {
  name: 'Main',
  components: {
    ProfileFormMain,
    Partida,
    Ganador
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
      partidas.add({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
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
