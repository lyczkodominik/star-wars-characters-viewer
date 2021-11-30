<template>
  <main class="container characters-page">
    <h1>Characters</h1>
    <nav>
      <button @click="$fetch">Refresh</button>
      <button :class="{disable: !previousPageUrl}" @click="getPreviousPage">
        Previous
      </button>
      <button :class="{disable: !nextPageUrl}" @click="getNextPage">
        Next
      </button>
      <h3>Total number of characters: {{ count }}</h3>
    </nav>
    <Loader v-if="loading"/>
    <p v-else-if="$fetchState.error">Something went wrong... Try again.</p>
    <List v-else :list="list"/>
  </main>
</template>

<script>
  import List from '@/components/List'
  import Loader from '@/components/Loader'

  export default {
    name: 'Characters',
    components: {
      List,
      Loader
    },
    data () {
      return {
        defaultUrl: 'https://swapi.dev/api/people',
        list: [],
        previousPageUrl: null,
        nextPageUrl: null,
        count: 0,
        loading: false
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
        this.loading = true;

        return this.$axios.get(url)
            .then((response) => {
              this.assignResponseData(response)
            })
            .then(() => {
              this.loading = false;
            })
      },
      assignResponseData (response) {
        this.list = response.data.results
        this.previousPageUrl = response.data.previous
        this.nextPageUrl = response.data.next
        this.count = response.data.count
      }
    }
  }
</script>

<style scoped lang="scss">
  .characters-page {
    height: 100%;
    padding: 30px 15px;

    h1 {
      margin: 0 0 15px 0;
    }

    nav {
      button {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #FFFFFF;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 300;
        color: $c4;
        text-align: center;
        transition: all 0.2s;
        user-select: none;
        cursor: pointer;
        background: $c1;

        &:hover {
          background: $c2;
        }

        &.disable {
          pointer-events: none;
          background: $c3;
        }
      }
    }
  }
</style>
