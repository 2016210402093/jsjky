<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

 }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: unset;
  background-color: rgb(250, 250, 250);
}

#app {
  max-width: 450px;
  min-width: 315px;
  height: 100%;
  margin: 0 auto;
}
</style>
