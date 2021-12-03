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
  import { configurableOptions, configurableSelections } from '@/assets/parserData'

  export default {
    name: 'Home',
    mounted () {
      console.log('sumAllFunctionArguments', this.sumAllFunctionArguments(1, 10, 100, 1000, 10000))
      console.log('getSelectedOptionsObject', this.getSelectedOptionsObject(configurableOptions, configurableSelections))
    },
    methods: {
      // TASK 2
      sumAllFunctionArguments: (...args) => args.reduce((a, b) => a + b),

      // TASK 3
      getSelectedOptionsObject: (options, selections) => {
        const selectionInfo = {}

        selections.forEach((selection, i) => {
          const resultByOptionId = options.find(opt => opt.attribute_id.toString() === selection.option_id)
          const resultByOptionValue = options.find(opt => opt.value_index === selection.option_value)

          if (resultByOptionId && resultByOptionValue) {
            selectionInfo[resultByOptionId.attribute_code] = resultByOptionValue.option_title
          }
        })

        return selectionInfo
      }
    }
  }
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
