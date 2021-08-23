<template>
  <div id="app">
    <app-header></app-header>

    <router-view />

    <b-container class="my-5 d-flex flex-row justify-content-between">
      <div class="d-flex flex-column justify-content-between align-items-start">
        <span
          >Album example is © Bootstrap, but please download and customize it
          for yourself!</span
        >
        <span
          >New to Bootstrap?
          <a href="#"> Visit the homepage</a>
          or read our <a href="">getting started guide.</a></span
        >
      </div>
      <div>
        <b-button variant="link">Back to top</b-button>
      </div>
    </b-container>
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header,
  },
};
</script>
<style>
.navbar-margin {
  margin-right: 6px;
}
.top-space {
  margin-top: 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
