<template>
  <div id="app">
    <TopNavBar class="top-nav" />
    <router-view class="router"/>
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
:root {
  --top-nav-height: 85px;
}
body {
  margin: 0;
  padding: 0;
  width: calc(100vw - 100px);
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
  height: var(--top-nav-height);
}
.router{
  margin-top: calc(var(--top-nav-height));
}
</style>
