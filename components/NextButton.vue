<template>
  <div class="next-btn"
       :class="{ disable }"
       :aria-label="title"
       @click="action"
  >
    <span v-if="title" class="title">{{ title }}</span>
    <span class="arrow"></span>
  </div>
</template>

<script>
  export default {
    name: 'NextButton',
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
  .next-btn {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    height: 35px;
    cursor: pointer;

    &.disable {
      pointer-events: none;

      .arrow {
        border-color: $c9 !important;
      }

      .title {
        color: $c9 !important;
      }
    }

    &:hover {
      .arrow {
        border-color: $c4;
      }

      .title {
        color: $c4;
      }
    }

    .title {
      color: $c10;
      font-size: 1.6rem;
      margin-right: -5px;
      transition: color .3s;
    }

    .arrow {
      border-right: 4px solid $c10;
      border-bottom: 4px solid $c10;
      border-radius: 1px;
      width: 20px;
      height: 20px;
      transform: rotate(-45deg);
      transition: border-color .3s;
    }
  }
</style>
