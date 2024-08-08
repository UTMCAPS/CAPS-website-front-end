<template>
  <top-nav/>
  <home-page/>
  <bot-link/>
</template>

<script>
import topNav from "@/components/topNav.vue";
import botLink from "@/components/botLink.vue";
import homePage from "@/components/homePage.vue";

export default {
  name: 'App',
  components: {
    topNav,
    homePage,
    botLink
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Arial, sans-serif;
  background-image: url("assets/background.svg");
  background-size: cover;
}
</style>
