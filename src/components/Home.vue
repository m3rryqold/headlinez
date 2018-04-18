<template>
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
</template>
<script>
const NewsApi = require('newsapi')

const newsapi = new NewsApi('30f053cdc83f4375bf42f5f4bd28c483')
export default {
  name: 'home',
  data () {
    return {
      headlinez: {}
    }
  },
  methods: {},
  beforeMount () {
    newsapi.v2.topHeadlines({
      country: 'us'
    }).then((data) => {
      this.headlinez = data.articles
    })
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>