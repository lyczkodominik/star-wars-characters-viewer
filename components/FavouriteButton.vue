<template>
  <div class="favourite-btn"
       :class="{ isInFavourites }"
       @click="isInFavourites ? remove() : add()"
  >
      <span>Remove from favourites</span>
      <span>Add to favourites</span>
  </div>
</template>

<script>
  export default {
    name: 'FavouriteButton',
    props: {
      data: {
        type: Object,
        default: null
      }
    },
    computed: {
      list () {
        return this.$store.state.favourites.list
      },
      isInFavourites () {
        return this.list.some(item => item.url === this.data.url)
      }
    },
    methods: {
      remove () {
        this.$store.commit('favourites/remove', this.data.url)
      },
      add () {
        this.$store.commit('favourites/add', this.data)
      }
    }
  }
</script>

<style scoped lang="scss">
  .favourite-btn {
    --color: #1a5f2d;
    display: inline-block;
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

    &.isInFavourites{
      --color: #9f0311;

      span:first-child{
        opacity: 1;
      }

      span:last-child{
        opacity: 0;
      }
    }

    span {
      position: absolute;
      font-weight: 500;
      text-align: center;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      transition: opacity.3s;
    }

    span:first-child{
      opacity: 0;
    }

    span:last-child{
      opacity: 1;
    }
  }
</style>
