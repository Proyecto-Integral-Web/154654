<template>
  <section>
    <div class="tarjetas p-5">
      <div class="container-fluid pb-5">
        <div class="row">
          <h4 class="mx-auto usuario">{{displayName}}</h4>
        </div>
        <div class="row">
          <div class="col-3 mx-auto">
            <h1>{{options[userOpcion]}}</h1>
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
.tarjetas {
  background: white;
  border-radius: 20px;
  color: white;
  font-family: KG Summer Storm Smooth;
  border: solid #ffbc1f 10px;
  .usuario {
    color: black;
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
