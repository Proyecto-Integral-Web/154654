<template>
  <section>
    <div class="row">User 1

    </div>
    <div class="row">

    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'UserArena',
  data () {
    return {
      options: {
        t: 'tijeras',
        pp: 'papel',
        p: 'piedra'
      }
    }
  },
  methods: {
    select (key) {
      this.$emit('opcion', key)
    }
  }
}
</script>
<style lang="scss"></style>
