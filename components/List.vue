<template>
  <div class="list">
    <nuxt-link v-for="(element, key) of list" :to="`/character/${getIdFromUrl(element.url)}`" :key="key">
      {{ element.name }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      getIdFromUrl (url) {
        return url.split('people/').pop().slice(0, -1);
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      width: calc(25% - 10px);
      box-sizing: border-box;
      margin: 5px;
      border-radius: 3px;
      border: 1px solid $c1;
      font-size: 1.4rem;
      padding: 15px;
      background: $c1;
      color: $c4 !important;
      transition: background .3s !important;
      cursor: pointer;

      &:hover {
        background: $c2;
      }
    }
  }
</style>
