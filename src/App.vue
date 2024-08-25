<template>
  <div id="app">
    <TopNavBar class="top-nav"/>
    <router-view />
    <bot-link />
  </div>
</template>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import botLink from "@/components/botLink.vue";

export default {
  name: "App",
  components: {
    TopNavBar,
    botLink,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
#app {
  font-family: Arial, sans-serif;
  /* background-image: url("assets/background.svg"); */
  background-size: cover;
}
.top-nav{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
