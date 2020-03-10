<template>
  <section>
    <div class="tarjetas p-5">
      <div class="container-fluid pb-5">
        <div class="row">
          <h6 class="mx-auto usuario">USUARIO</h6>
        </div>
        <div class="row">
          <div class="col-3 mx-auto">
            <h1>{{options[user_opcion]}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mx-auto opciones">
            <div class="row">
              <div
                class="col col-sm-4 opcion p-3"
                v-for="(option, key) in options"
                :key="key"
                @click="select(key)"
              >
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
  name: 'UserArena',
  props: ['userOpcion'],
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
      this.$emit('opcion', key)
    }
  }
}
</script>
<style lang="scss">
.tarjetas {
  background: white;
  border-radius: 50px;
  color: white;
  font-family: montserrat;
  border: solid #ffbc1f 15px;
  .usuario {
    color: #667fed;
    font-weight: bold;
  }
}
.opciones {
  background: transparent;
  border: solid #ffbc1f 1px;
  .opcion {
    cursor: pointer;
    &:hover {
      background: #ffbc1f;
    }
  }
}
</style>
