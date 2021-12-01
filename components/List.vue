<template>
  <div class="list-container">
    <ul>
      <li v-for="(element, key) of list" :key="key">
        <div class="text-container">
          <span class="index">{{ `${getIdFromUrl(element.url)}.` }}</span>
          <span class="name">{{ element.name }}</span>
        </div>
        <div class="btns-container">
          <nuxt-link class="character-details-link" :to="`/character/${getIdFromUrl(element.url)}`">
            Show details
          </nuxt-link>
          <FavouriteButton :data="element"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import FavouriteButton from '~/components/FavouriteButton'

  export default {
    name: 'List',
    components: {
      FavouriteButton
    },
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      getIdFromUrl (url) {
        return url.split('people/').pop().slice(0, -1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 700px;
    max-width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 10px;
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid $c1;
        font-size: 1.4rem;
        padding: 15px;
        color: $c1;

        .text-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .name, .index {
            font-size: 1.6rem;
            font-weight: 600;

            &.index {
              margin-right: 10px;
            }
          }
        }

        .btns-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          a.character-details-link {
            --color: #1d3557;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 15px;
            cursor: pointer;
            width: 100px;
            height: 40px;
            position: relative;
            background: none;
            border: 2px solid;
            color: var(--color);
            transition: 0.3s;

            &:hover {
              box-shadow: inset 100px 0 0 0 var(--color);
              border-color: var(--color);
              color: $c7;
            }
          }
        }
      }
    }
  }
</style>
