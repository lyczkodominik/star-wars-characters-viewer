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
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 10px;
    color: $c7;
    height: 100vh;
  }

  body {
    #__nuxt {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-grow: 1;
      height: 100%;
      font-family: Roboto, Lato, Helvetica Neue, Arial, Helvetica, sans-serif;

      #__layout {
        display: flex;
        width: 100%;
        min-height: 100%;

        .default-layout {
          flex-grow: 1;
          padding-top: $defaultHeaderHeight;
          position: relative;
          background-image: url("~/static/bg.jpg");
          background-size: 100% 100%;

          .container {
            margin-left: auto;
            margin-right: auto;
            width: 1200px;
            max-width: 100%;
            box-sizing: border-box;
          }

          a {
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
