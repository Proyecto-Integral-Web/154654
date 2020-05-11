<template>
  <section>
    <img
      class="logoflotante"
      src="../../assets/KACHIPU-07.png"
    >
    <div class="logogame">
      <ProfileFormMain></ProfileFormMain>
      <img
        class="logogameimg"
        src="../../assets/KACHIPU-12.png"
      >
    </div>
    <div class="p-5">
      <h1 class="tituloJuego">{{$route.params.no_partida.replace('-',' ')}}</h1>
      <div class="row row-fluid">
        <div class="col ml-3">
          <button
            class="btn btn-new-partidas"
            @click="crearPartida"
          >
            Nueva Partida
          </button>
        </div>
        <div class="col mr-3">
          <div class="contadores">
            <h5>0/0</h5>
          </div>
        </div>
      </div>
      <!--<h3>{{$route.params.no_partida.replace('-',' ')}}</h3>-->
      <div class="row m-3">

        <div class="col col-sm-12 col-lg-8 p-2 bg-light">
          <UserPruebas></UserPruebas>
        </div>
        <div
          class="col col-sm-12 col-lg-4 p-2"
          style="background-color:black;"
        >

          <UserPruebas></UserPruebas>
          <button>
            👾
          </button>
        </div>
      </div>
      <b>{{partida}}</b>
    </div>
  </section>
</template>
<script lang="js">
import UserPruebas from '@/components/Juego/UserPruebas'
import ProfileFormMain from '@/components/ProfileFormMain'
export default {
  name: 'Partidas',
  components: {
    UserPruebas,
    ProfileFormMain
  }

}
</script>

<style lang="scss">
@import "./../../components/recursos/css/game.css";
</style>
