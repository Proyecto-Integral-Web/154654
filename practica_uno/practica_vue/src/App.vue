<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link
        :to="{
        name:'about'}"
        :class="$route.name=='about'?'btn':''"
      >About</router-link> |
      <router-link to="/juego-1/partida-1">Juego</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111213;
}

#nav {
  padding: 10px;
  font-size: 10pt;
  margin: 20px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #113b28;
    }
  }
}
</style>
