<template>
  <main class="home-page">
    <div class="title-wrapper">
      <h1>Check our</h1>
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
        </filter>
      </svg>
      <nuxt-link filter-content="S" to="/characters">DATABANK</nuxt-link>
    </div>
  </main>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .home-page {
    height: 100%;
    padding: 30px 15px;
    background-image: url("~/static/home-bg.jpg");
    background-size: cover;

    .title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      position: absolute;
      top: 40%;
      left: 40%;
      transform: translate(-50%, -50%);

      h1 {
        margin: 0;
        font-size: 4rem;
      }

      svg {
        display: none;
      }

      a {
        color: $c4;
        position: relative;
        font-size: 64px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        display: inline-block;
        font-weight: 400;
        transition: color .3s;

        &:hover {
          color: $c10;
        }

        &:before {
          position: absolute;
          left: 0;
          top: 0;
          content: attr(filter-content);
          filter: url(#motion-blur-filter);
        }
      }
    }
  }
</style>
