<template>
  <div class="login container">
    <div class="p-5">
      <!--  Soy el login  -->
      <div class="row no-gutter">
        <div class="col">
          <img
            src="../assets/bg.jpg"
            class="card-img"
          >
        </div>
        <div class="col">
          <!-- Invocamos el componente para su visualizacion en nuestro View-->
          <LoginForm class="login-form"></LoginForm>
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
  border-radius: 30px !important;
}
.login-form {
  padding: 80px;
  border-radius: 20px;
  background-color: whitesmoke;
}
</style>
