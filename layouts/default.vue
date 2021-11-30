<template>
  <div class="default-layout">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script type="text/javascript">
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Default',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss"></style>
