<template>
  <section>
    <div class="tarjeta-jugador p-5">
      <div class="container-fluid pb-5">
        <div class="row">
          <h4 class="mx-auto usuario">Display name</h4>
        </div>
        <div class="row">
          <div class="col-3 mx-auto">
            <h1>{{options[userOpcion]}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mx-auto opciones">
            <div class="row">
              <div class="col col-sm-4 opcion p-3">
                {{option}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script lang="js">
export default {
  name: 'UserPruebas',
  props: ['userOpcion', 'displayName'],
  data () {
    return {
      options: {
        t: '✂️',
        pp: '🧻',
        p: '💎'
      }
    }
  },
  methods: {
    select (key) {
      this.$emit('opcion', [key, this.displayName])
    }
  }
}
</script>
<style lang="scss">
@import "./../recursos/css/game.css";
</style>
