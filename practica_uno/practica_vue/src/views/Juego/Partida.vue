<template>
  <section>
    <div class="container">
      <h1>Juego1</h1>
      <div class="row justify-content-md-center">
        <div class="col col-sm-6">
          <UserArena></UserArena>
        </div>
        <div class="col col-sm-6">
          <UserArena></UserArena>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-4">

        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
export default {
  name: 'userArena',
  components: {
    UserArena
  }
}
</script>
