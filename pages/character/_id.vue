<template>
  <main class="container character-page">
    <h1>Character</h1>
    <h2>Id: {{ id }}</h2>
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

<style scoped lang="scss">
  .character-page{
    height: 100%;
    padding: 30px 15px;

    h1 {
      margin: 0;
    }
  }
</style>
