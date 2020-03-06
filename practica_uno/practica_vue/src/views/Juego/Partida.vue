<template>
  <section>
    <div class="partida h-100 p-5 m-5">
      <div class="row row-fluid">
        <div class="col col-sm-6 offset-3">
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-12 col-lg-6 p-2">
          <user-arena @opcion="getOpcion"></user-arena>
        </div>
        <div class="col col-sm-12 col-lg-6 p-2">
          <user-arena></user-arena>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  methods: {
    getOpcion (opcion) {
      alert(`Estoy en partida: ${opcion}`)
    }
  }
}
</script>
<style lang="scss">
.partida {
  background-image: url(../../assets/bg3.jpg);
}
</style>
