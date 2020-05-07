<template>
  <div class="profile container">
    <div class="p">
      <div class="row">
        <div class="col-lg-4">
          <ProfileForm class="login-form"></ProfileForm>
        </div>
        <div class="col-lg-8 d-none">
          <Ronda></Ronda>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import ProfileForm from '@/components/ProfileForm'
import Ronda from '@/components/Juego/Ronda'
export default {
  name: 'Profile',
  components: {
    ProfileForm,
    Ronda
  },
  methods: {

  },
  beforeCreate: function () {
    document.body.className = 'profile'
  }

}
</script>

<style lang="scss">
</style>
