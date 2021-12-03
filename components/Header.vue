<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo-btn" title="DomkiLetniskowe.org">
        <img src="/logo.png" alt="star wars" width="138" height="60">
      </nuxt-link>
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
    z-index: 1001;
    position: fixed;
    box-shadow: 0 2px 10px rgba(black, 0.2);
    background-image: url("~static/header-bg.jpg");

    > div.container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      box-sizing: border-box;

      .logo-btn{

      }

      nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a {
          font-size: 1.4rem;
          color: $c10;
          text-transform: unset;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: .038rem;
          position: relative;
          user-select: none;
          transition: color .3s;

          &:hover, &.active {
            color: $c4;
          }
        }

        a, .lang-btn {
          font-size: 1.6rem !important;
          margin-left: 2rem;
        }
      }
    }
  }
</style>
