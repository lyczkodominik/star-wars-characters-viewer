<template>
  <div class="default-layout">
    <Header/>
    <nuxt/>
  </div>
</template>

<script type="text/javascript">
  import Header from '~/components/Header'

  export default {
    name: 'Default',
    components: {
      Header
    },
    mounted () {
      this.$store.commit('initialiseStore');
    }
  }
</script>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 10px;
    height: 100vh;
  }

  body {
    box-sizing: border-box;
    padding-top: $defaultHeaderHeight;

    #__nuxt {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-grow: 1;
      height: 100%;
      font-family: Roboto, Lato, Helvetica Neue, Arial, Helvetica, sans-serif;

      #__layout {
        height: 100%;
        width: 100%;

        .default-layout {
          height: 100%;

          .container {
            margin-left: auto;
            margin-right: auto;
            width: 1200px;
            max-width: 100%;
            box-sizing: border-box;
          }

          a {
            font-size: 1.4rem;
            text-transform: unset;
            text-decoration: none;
            cursor: pointer;
            letter-spacing: .038rem;
            user-select: none;
          }
        }
      }
    }
  }
</style>
