<template>
  <div id="app">
    <div id="nav">
      <router-link to="/profile">Profile</router-link> |
      <router-link
        :to="{
        name:'about'}"
        :class="$route.name=='about'?'btn':''"
      >About</router-link> |
      <router-link to="/main">Main</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="js">
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters({ logged: 'logged' })
  }
}
</script>
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
    color: yellow;

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
