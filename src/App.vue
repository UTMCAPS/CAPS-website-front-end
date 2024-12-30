<template>
  <div id="app">
    <router-view class="router"/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}
#app {
  font-family: Arial, sans-serif;
  background-size: cover;
}
</style>


