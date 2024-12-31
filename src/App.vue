<template>
  <div id="app">
    <div class="contact">
      <HomePageContact/>
    </div>
    <div class="nav">
      <NavigationBar @logoClicked="logoClicked" />
    </div>
    <router-view class="router"/>
  </div>
</template>

<script>
import HomePageContact from "@/components/homePage/HomePageContact.vue";
import NavigationBar from "@/components/concrete/NavigationBar.vue";

export default {
  name: "App",
  components: {
    HomePageContact,
    NavigationBar,
  },
  data() {
    return {
      scroll: true
    }
  },
  methods: {
    scrollToNav() {
      const nav = document.querySelector('.nav');
      if(this.scroll && nav){
        nav.scrollIntoView({ behavior: 'smooth' });
        this.scroll = false;
      }
    },
    logoClicked() {
      this.scroll = true;
      this.scrollToNav();
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.scrollToNav();
      });
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.contact {
  width: 100vw;
  height: 5vh;
  background: #1F3979;
}
.nav {
  width: 100vw;
  height: 10vh;
  background: #EEEEEE;
  position: sticky;
  top: 0;
  z-index: 1;
}
#app {
  font-family: Arial, sans-serif;
  background-size: cover;
}
</style>


