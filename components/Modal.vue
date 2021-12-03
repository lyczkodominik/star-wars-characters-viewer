<template>
  <div class="modal" :class="{ visible }">
    <section>
      <div v-for="element in parsedData" :key="element.key">
        <span>{{ element.key }}</span>
        <span>{{ element.value }}</span>
      </div>
    </section>
    <div class="close-btn" @click="$emit('close')">Close</div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      data: {
        type: Object,
        default: null
      },
      visible: {
        type: Boolean,
        default: null
      }
    },
    computed: {
      parsedData () {
        if (this.data) {
          return Object
              .keys(this.data)
              .map(element => ({
                key: element,
                value: this.data[element]
              }))
        } else {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background: rgba(black, 0.8);
    opacity: 0;
    transition: opacity .2s;
    pointer-events: none;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }

    section {
      margin-bottom: 20px;
      font-size: 1.6rem;

      div {
        margin-bottom: 10px;

        span:first-child {
          color: #9e4f60;
          font-size: 2.2rem;
          margin-right: 15px;
        }
      }
    }

    .close-btn {
      --color: #9e4f60;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      position: relative;
      background: none;
      border: 2px solid var(--color);
      transition: 0.3s;
      color: $c7;
      font-size: 1.8rem;

      &:hover {
        box-shadow: inset 117px 0 0 0 var(--color);
        border-color: var(--color);
      }
    }
  }
</style>
