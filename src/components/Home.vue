<template>
  <div>
    <div class="country">
      <form action="">
        <select name="" id="" v-model="country" @change="changeCounrty(country)">
          <option value="">Change country</option>
          <option value="ae">ae</option>
          <option value="ar">ar</option>
          <option value="at">at</option>
          <option value="au">au</option>
          <option value="be">be</option>
          <option value="bg">bg</option>
          <option value="br">br</option>
          <option value="ca">ca</option>
          <option value="ch">ch</option>
          <option value="cn">cn</option>
          <option value="co">co</option>
          <option value="us">us</option>
        </select>
      </form>
    </div>
    <div class="columns">
      <ul>
        <li v-for="headline in headlinez">
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img :src="headline.urlToImage" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="headline.urlToImage" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4"> {{headline.title}} </p>
                      <p class="subtitle is-6"></p>
                    </div>
                  </div>

                  <div class="content">
                    {{headline.description}}
                    <a :href="headline.url" target="_blank">Read More...</a>
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
  </div>
</template>
<script>
  import dexie from 'dexie'

  const NewsApi = require('newsapi')

  const newsapi = new NewsApi('30f053cdc83f4375bf42f5f4bd28c483')

  const db = new dexie('headlinez')
  export default {
    name: 'home',
    data() {
      return {
        headlinez: {},
        country: ''
      }
    },
    methods: {},
    beforeMount() {
      newsapi.v2.topHeadlines({
        country: 'us'
      }).then((data) => {
        this.headlinez = data.articles
        this.headlinez.forEach((dt) => {
          db.Home.put(dt)
        })
      }).catch(() => {
        db.Home.toArray().then((dt) => {
          this.headlinez = dt
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
    },
    methods: {
      changeCounrty(country) {
        newsapi.v2.topHeadlines({
          country: country
        }).then((data) => {
          this.headlinez = data.articles
          this.headlinez.forEach((dt) => {
            db.headlinez.put(dt, country)
          })
        }).catch(() => {
          db.headlinez.toArray().then((dt) => {
            this.headlinez = dt
          })
        })
      }
    }
  }
</script>
<style scoped>
  .country {
    margin-top: 5%;
    margin-bottom: 2%;
  }
</style>
