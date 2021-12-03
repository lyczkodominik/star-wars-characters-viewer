<template>
  <main class="container character-page">
    <section>
      <h1>Character details</h1>
      <p class="character-id">Id: {{ id }}</p>
      <nuxt-link class="return-btn" :to="charactersUrl">Return to characters list</nuxt-link>
    </section>
    <section v-if="details">
      <div class="parameter">
        <span class="key">Name</span>
        <span class="value">{{ details.name }}</span>
      </div>
      <div class="parameter">
        <span class="key">Height</span>
        <span class="value">{{ details.height }}</span>
      </div>
      <div class="parameter">
        <span class="key">Mass</span>
        <span class="value">{{ details.mass }}</span>
      </div>
      <div class="parameter">
        <span class="key">Hair color</span>
        <span class="value">{{ details.hair_color }}</span>
      </div>
      <div class="parameter">
        <span class="key">Skin color</span>
        <span class="value">{{ details.skin_color }}</span>
      </div>
      <div class="parameter">
        <span class="key">Eye color</span>
        <span class="value">{{ details.eye_color }}</span>
      </div>
      <div class="parameter">
        <span class="key">Birth year</span>
        <span class="value">{{ details.birth_year }}</span>
      </div>
      <div class="parameter">
        <span class="key">Gender</span>
        <span class="value">{{ details.gender }}</span>
      </div>
      <div class="homeworld-btn" @click="getHomeworldData(details.homewolrd)">
        Homeworld
      </div>
    </section>
    <Modal :data="homeworldData" :visible="modalIsVisible" @close="modalIsVisible = false"/>
    <div class="layer" :class="{ visible: loading}">
      <Loader/>
      <h2>Loading data...</h2>
    </div>
    <h2 v-if="error" class="error">{{ error }}</h2>
  </main>
</template>

<script>
  import Loader from '@/components/Loader'
  import Modal from '@/components/Modal'

  export default {
    name: 'Character',
    components: {
      Loader,
      Modal
    },
    data () {
      return {
        defaultUrl: 'https://swapi.dev/api/people/',
        details: null,
        loading: false,
        error: null,
        homeworldData: null,
        modalIsVisible: false
      }
    },
    async fetch () {
      this.loading = true

      await this.$axios.get(this.defaultUrl + this.id)
          .then((response) => {
            this.error = null
            this.details = response.data
          })
          .catch((err) => {
            this.error = `Fetching data failed... error ${err.response.status}`
          })
          .then(() => {
            this.loading = false
          })
    },
    computed: {
      id () {
        return this.$route.params.id
      },
      page () {
        return this.$route.query.page
      },
      charactersUrl () {
        let temp = '/characters'

        if (this.page) {
          temp += `/${this.page}`
        }

        return temp
      }
    },
    methods: {
      getHomeworldData (url) {
        this.$axios.get(url)
            .then((response) => {
              this.error = null
              this.homeworldData = response.data
              this.modalIsVisible = true
            })
            .catch((err) => {
              this.error = `Fetching data failed... error ${err.response.status}`
            })
            .then(() => {
              this.loading = false
            })
      }
    }
  }
</script>

<style scoped lang="scss">
  .character-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 15px;

    section {
      padding: 30px;

      h1 {
        margin: 0 0 10px 0;
        font-size: 1.8rem;
      }

      .character-id {
        font-size: 1.6rem;
        margin: 0 0 10px 0;
      }

      .return-btn {
        color: $c10;
        transition: color .3s;
        font-size: 1.8rem;

        &:hover {
          color: $c4;
        }
      }

      .parameter {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 15px;

        .key {
          color: #ddd;
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .value {
          color: #9e4f60;
          font-size: 1.6rem;
        }
      }

      .homeworld-btn {
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

    .layer {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
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
</style>
