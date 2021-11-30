<template>
  <main>
    <h1>Character</h1>
  </main>
</template>

<script>
export default {
  name: 'Character',
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
