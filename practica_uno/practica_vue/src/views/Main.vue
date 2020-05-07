<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-lg-5 left">
          <div class="contenedor">
            <div class="new"></div>
            <button class="btn btn-create">NEW GAME</button>
          </div>
        </div>
        <div
          class="col-lg-7 mt pt"
          style="background-color:#000; min-height:400px;"
        >
          <ProfileFormMain></ProfileFormMain>
          <Partidas
            class="mt"
            style="background-color:transparent"
          ></Partidas>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import ProfileFormMain from '@/components/ProfileFormMain'
import Partidas from '@/components/MainForm'
export default {
  name: 'Profile',
  components: {
    ProfileFormMain,
    Partidas
  },
  methods: {

  },
  beforeCreate: function () {
    document.body.className = 'main'
  }

}
</script>

<style lang="scss">
@import "./../components/recursos/css/profilemain.css";
</style>>
