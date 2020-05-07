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
          <user-arena></user-arena>
        </div>
        <div class="col col-sm-12 col-lg-6 p-2">

          <user-arena></user-arena>
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
export default {
  name: 'Pruebas'
}
</script>

<style lang="scss">
</style>
