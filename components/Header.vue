<template>
  <header>
    <div class="container">
      <div class="logo"/>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/characters">Characters</nuxt-link>
        <nuxt-link to="/favourites">Favourites</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  header {
    top: 0;
    left: 0;
    right: 0;
    z-index: 402;
    position: fixed;
    border-bottom: 2px solid $c2;
    background: $c1;
    box-shadow: 0 2px 10px rgba($c2, 0.2);

    > div.container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      box-sizing: border-box;

      nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a, .lang-btn {
          font-size: 1.6rem !important;
          margin-left: 2rem;
        }
      }
    }
  }
</style>
