<template>
  <div class="login container">
    <div class="p">
      <!--  Soy el signUp  -->
      <div class="row">
        <div class="col-sm">
          <!-- Invocamos el componente para su visualizacion en nuestro View-->
          <SignUpForm class="login-form"></SignUpForm>
        </div>
        <div class="col-sm">
          <div class="img">
            <table style="height: 100%; width:100%;">
              <tbody>
                <tr>
                  <td class="text-center">Sign Up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import SignUpForm from '@/components/SignUpForm'
export default {
  name: 'signup',
  components: {
    SignUpForm
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
