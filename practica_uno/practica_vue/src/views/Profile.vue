<template>
  <div class="profile container">
    <div class="p">
      <div class="row">
        <div class="col-lg-4">
          <ProfileForm class="login-form"></ProfileForm>
        </div>
        <div class="col-lg-8 d-none d-lg-block">
          <div class="content">
            <img
              style="width: 200px; height: 200px;"
              src="../assets/1.jpg"
              class="rounded float-left img-fluid m-3"
            >
            <img
              style="width: 200px; height: 200px;"
              src="../assets/2.jpg"
              class="rounded  img-fluid m-3"
            >
            <img
              style="width: 200px; height: 200px;"
              src="../assets/3.jpg"
              class="rounded float-left img-fluid m-3"
            >
            <img
              style="width: 200px; height: 200px;"
              src="../assets/4.jpg"
              class="rounded float-left img-fluid m-3"
            >
            <img
              style="width: 200px; height: 200px;"
              src="../assets/5.jpg"
              class="rounded float-left img-fluid m-3"
            >
            <img
              style="width: 200px; height: 200px;"
              src="../assets/6.png"
              class="rounded float-left img-fluid m-3"
            >

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import ProfileForm from '@/components/ProfileForm'
export default {
  name: 'Profile',
  components: {
    ProfileForm
  },
  methods: {

  }
}
</script>

<style lang="scss">
.content {
  height: 100%;
  border-radius: 0px !important;
  background-size: cover;
  border-left: 1px solid gainsboro !important;
  text-align: center;
}
</style>
