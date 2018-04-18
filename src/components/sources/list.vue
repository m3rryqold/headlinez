<template>
  <div class="columns">
    <ul>
      <li v-for="source in sources">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4"> {{source.name}} </p>
                    <p class="subtitle is-6"></p>
                  </div>
                </div>

                <div class="content">
                  {{source.description}}
                  <router-link></router-link>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import dexie from 'dexie'

  const NewsApi = require('newsapi')
  const newsapi = new NewsApi('30f053cdc83f4375bf42f5f4bd28c483')
  const db = new dexie('headlinez')
  export default {
    name: 'list',
    data() {
      return {
        sources: {}
      }
    },
    beforeMount() {
      newsapi.v2.sources({
        language: 'en',
        country:'us'
      }).then((data) => {
        this.sources = data.sources
        this.sources.forEach((dt) => {
          db.sourceslist.put(dt)
        })
      }).catch(() => {
        db.sourceslist.toArray().then((dt) => {
          this.sources = dt
        })
      })
    },
    mounted() {
      db.version(1).stores({
        Home: '++id',
        sourceslist: '++id',
        sourcesheadlines: '',
        headlinez: ''
      })
    }
  }
</script>

<style scoped>

</style>
