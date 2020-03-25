<template>
  <section>
    <div class="marcador h-100 p-5 m-5">
      <div class="row">
        <div class="col-12 ">
          <h3 Class="title">VICTORIA</h3>
        </div>
        <div class="col-12">
          <h5 class="title">0 - 0</h5>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col col-sm-12 col-lg-6 p-2">
          <Ronda></Ronda>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import Ronda from '@/components/Juego/Ronda'

export default {
  name: 'Marcador',
  components: {
    Ronda
  },

  watch: {
    '$route.params': {
      deep: true,
      immediate: true
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>
<style lang="scss">
.title {
  color: white;
  font-family: KG Summer Storm Smooth !important;
}
.marcador {
  background-image: url(../../assets/bg.png);
}
.btn-black {
  color: white !important;
}
b {
  color: white;
}
</style>
