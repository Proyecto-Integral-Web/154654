<template>
  <section>
    <h3>We are <strong>aroma</strong></h3>
    <h6>Welcome Back, Please login in yout account</h6>
    <div class="col">
      <input
        type="email"
        name="email"
        class="form-control"
      >
      <input
        type="password"
        name="password"
        class="form-control mb-2"
      >
    </div>
    <div class="form-group mb-2">
      <div class="row">
        <div class="col">
          <small>Remember me</small>
        </div>
        <div class="col">
          <small>Forgot password?</small>
        </div>
      </div>
    </div>
    <div class="form-group mb-2">
      <div class="row">
        <div class="col">
          <button class="btn btn_success btn-block btn-black btn-dark">Login</button>
        </div>
        <div class="col">
          <button class="btn btn-block  btn-light">Sign Up</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="js">
export default {
  name: 'LoginForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//Style, ubicamos el css relacionado a nuestros views y componentes
<style lang="scss">
.btn-black {
  background: #001;
  &:hover {
    background: rgb(71, 71, 71);
  }
}
</style>
