<template>
  <main class="container characters-page">
    <h1>Characters</h1>
    <p class="total-characters-count">Total number of characters: {{ count }}</p>
    <div class="refresh-btn" @click="$fetch">Refresh list</div>
    <section>
      <nav v-if="list.length">
        <PreviousButton :action="getPreviousPage"
                        title="Previous page"
                        :disable="!previousPageUrl"
        />
        <span class="current-page-index">{{ currentPageIndex }}</span>
        <NextButton :action="getNextPage"
                    title="Next page"
                    :disable="!nextPageUrl"
        />
      </nav>
      <List :list="list" :loading="loading"/>
      <nav v-if="list.length">
        <PreviousButton :action="getPreviousPage"
                        title="Previous page"
                        :disable="!previousPageUrl"
        />
        <span class="current-page-index">{{ currentPageIndex }}</span>
        <NextButton :action="getNextPage"
                    title="Next page"
                    :disable="!nextPageUrl"
        />
      </nav>
      <div class="layer" :class="{ visible: loading}">
        <Loader/>
        <h2>Loading data...</h2>
      </div>
      <h2 v-if="error" class="error">{{ error }}</h2>
    </section>
  </main>
</template>

<script>
  import List from '@/components/List'
  import NextButton from '@/components/NextButton'
  import PreviousButton from '@/components/PreviousButton'
  import Loader from '@/components/Loader'

  export default {
    name: 'Characters',
    components: {
      List,
      NextButton,
      PreviousButton,
      Loader
    },
    middleware: 'synchroniseStore',
    data () {
      return {
        defaultUrl: 'https://swapi.dev/api/people',
        list: [],
        previousPageUrl: null,
        nextPageUrl: null,
        count: 0,
        loading: false,
        currentPageIndex: 1,
        error: null
      }
    },
    async fetch () {
      await this.getData(this.defaultUrl)
    },
    methods: {
      async getPreviousPage () {
        await this.getData(this.previousPageUrl)
      },
      async getNextPage () {
        await this.getData(this.nextPageUrl)
      },
      getData (url) {
        this.loading = true

        return this.$axios.get(url)
            .then((response) => {
              this.error = null;
              this.setCurrentPage(url)
              this.assignResponseData(response)
            })
            .catch((err) => {
              this.error = `Fetching data failed... error ${err.response.status}`;
            })
            .then(() => {
              this.loading = false
            })
      },
      assignResponseData (response) {
        this.list = response.data.results
        this.previousPageUrl = response.data.previous
        this.nextPageUrl = response.data.next
        this.count = response.data.count
      },
      setCurrentPage (url) {
        const temp = url.replace('https://swapi.dev/api/people', '')

        if (temp.length === 0) {
          this.currentPageIndex = 1
        } else {
          this.currentPageIndex = temp.replace('/?page=', '')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .characters-page {
    padding: 30px 15px 60px 15px;
    box-sizing: border-box;

    h1 {
      margin: 0 0 10px 0;
    }

    .total-characters-count {
      font-size: 1.6rem;
      margin: 0 0 10px 0;
    }

    .refresh-btn {
      --color: #2f0c81;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 100px;
      height: 40px;
      position: relative;
      background: none;
      border: 2px solid;
      color: var(--color);
      transition: 0.3s;
      font-size: 1.6rem;

      &:hover {
        box-shadow: inset 100px 0 0 0 var(--color);
        border-color: var(--color);
        color: $c7;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 15px;
      width: 100%;

      .error{
        color: $c5;
      }

      nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 20px 15px;

        .current-page-index {
          font-size: 1.6rem;
          font-weight: 600;
          margin: 0 15px;
        }
      }

      .layer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: $defaultHeaderHeight;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1000;
        background: rgba(black, 0.4);
        opacity: 0;
        transition: opacity .2s;
        pointer-events: none;

        &.visible {
          opacity: 1;
          pointer-events: auto;
        }

        h2 {
          font-size: 2.2rem;
          color: $c7;
          margin: 0 0 0 15px;
        }
      }
    }
  }
</style>
