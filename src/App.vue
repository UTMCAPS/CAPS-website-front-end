<template>
  <div id="app">
    <router-view class="router"/>
  </div>
</template>

<script>
//import TopNavBar from "@/components/TopNavBar.vue";
//import botLink from "@/components/botLink.vue";

export default {
  name: "App",
  components: {
    //TopNavBar,
    //botLink,
  },
};
</script>

<style>
:root {
  /*--top-nav-height: 0px;*/
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
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
.router{
}
</style>


