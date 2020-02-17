<template>
  <div class="login container">
    <div class="p">
      <!--  Soy el login  -->
      <div class="row">
        <div class="col-lg-6 d-none d-lg-block">
          <div class="img">
            <table style="height: 100%; width:100%;">
              <tbody>
                <tr>
                  <td class="text-center">Login</td>
                </tr>
              </tbody>
            </table>

          </div>
          <!--<img
            src="
              ../assets/bg.jpg"
              class="img-fluid img-card"
            >-->
        </div>
        <div class="col-lg-6">
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
.img {
  height: 100%;
  border-radius: 30px !important;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  text-align: center;
}
.login-form {
  padding: 80px;
  border-radius: 20px;
  background-color: whitesmoke;
}
td {
  color: white;
  font-family: montserrat;
  font-size: 25pt;
  font-weight: bold;
  opacity: 50%;
}
</style>
