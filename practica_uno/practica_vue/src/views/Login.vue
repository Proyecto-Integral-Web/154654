<template>
  <div class="login container">
    <div class="p-5">
      <!--  Soy el login  -->
      <div class="row">

        <div class="col">
          <!-- Invocamos el componente para su visualizacion en nuestro View-->
          <LoginForm></LoginForm>
        </div>
        <div class="col">
          <img src="../assets/bg.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import LoginForm from '@/components/LoginForm'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
img {
  height: 100%;
}
</style>
