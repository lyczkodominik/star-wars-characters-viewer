<template>
  <div class="previous-btn"
       :class="{ disable }"
       :aria-label="title"
       @click="action"
  >
    <span class="arrow"></span>
    <span v-if="title" class="title">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PreviousButton',
    props: {
      action: {
        type: Function,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      disable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .previous-btn {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    height: 35px;
    cursor: pointer;

    &.disable {
      pointer-events: none;

      .arrow{
        border-color: $c6 !important;
      }

      .title{
        color: $c6 !important;
      }
    }

    &:hover {
      .arrow{
        border-color: $c2;
      }

      .title{
        color: $c2;
      }
    }

    .arrow {
      border-left: 4px solid $c1;
      border-top: 4px solid $c1;
      border-radius: 1px;
      width: 20px;
      height: 20px;
      transform: rotate(-45deg);
      transition: border-color .3s;
    }

    .title {
      color: $c1;
      font-size: 1.6rem;
      margin-left: -5px;
      transition: color .3s;
    }
  }
</style>
