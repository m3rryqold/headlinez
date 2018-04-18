<template>
  <div id="app">
    <header>
      <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h3 class="title is-3" id="navheader">Headlines</h3>
        </div>
        <div class="navbar-menu">
          <router-link :to="{name:'sources-list'}" class="navbar-item pull-right">Sources</router-link>
        </div>
      </nav>
    </header>
    <main>

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  body {
    margin: 0;
  }

  #navheader {
    color: lightgrey
  }
</style>
