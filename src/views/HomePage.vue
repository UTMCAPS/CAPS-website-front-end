<template>
  <div class="contact">
    <HomePageContact/>
  </div>
  <div class="nav">
    <NavigationBar/>
  </div>
  <div class="banner">
    <HomePageBanner/>
  </div>
  <div class="slogan">
    <HomePageSlogan/>
  </div>
  <div class="about-us">
    <HomePageAboutUs/>
  </div>
  <div class="events-this-week">
    <HomePageEventsThisWeek/>
  </div>
  <div class="upcoming-events">
    <HomePageUpcomingEvents/>
  </div>
  <div class="join-us">
    <HomePageJoinUs/>
  </div>
  <div class="footer">
    <HomePageFooter/>
  </div>
  <div :class="{'jump-to-top-fadein': this.showJumpToTop, 'jump-to-top': true, 'jump-to-top-fadeout': !this.showJumpToTop}" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1F3979"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
  </div>
</template>

<script>
import HomePageContact from "@/components/homePage/HomePageContact.vue";
import HomePageBanner from "@/components/homePage/HomePageBanner.vue";
import HomePageSlogan from "@/components/homePage/HomePageSlogan.vue";
import HomePageAboutUs from "@/components/homePage/HomePageAboutUs.vue";
import HomePageEventsThisWeek from "@/components/homePage/HomePageEventsThisWeek.vue";
import HomePageUpcomingEvents from "@/components/homePage/HomePageUpcomingEvents.vue";
import HomePageJoinUs from "@/components/homePage/HomePageJoinUs.vue";
import HomePageFooter from "@/components/homePage/HomePageFooter.vue";
import NavigationBar from "@/components/concrete/NavigationBar.vue";

export default {
  name: "HomePage",
  components: {
    NavigationBar,
    HomePageFooter,
    HomePageJoinUs,
    HomePageUpcomingEvents,
    HomePageEventsThisWeek,
    HomePageAboutUs,
    HomePageSlogan,
    HomePageBanner,
    HomePageContact
  },
  data() {
    return {
      showJumpToTop: false
    }
  },
  mounted () {
    // 初始化时滚动到导航栏
    const nav = document.querySelector('.nav');
    if(nav){
      nav.scrollIntoView({ behavior: 'smooth' });
    }

    // 滚动到Solgen后再时显示回到顶部按钮
    window.addEventListener('scroll', () => {
      const slogan = document.querySelector('.slogan');
      if(slogan){
        const sloganTop = slogan.getBoundingClientRect().top-100;
        if(sloganTop < 0){
          this.showJumpToTop = true;
        }else{
          this.showJumpToTop = false;
        }
      }
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }
};
</script>

<style scoped>
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
.banner {
  width: 100vw;
  height: 90vh;
  background: #1F3979;
}
.slogan {
  width: 100vw;
  height: 20vh;
  scroll-margin-top: 10vh;
  background: #EEEEEE;
}
.about-us {
  width: 100vw;
  height: 90vh;
  background: #1F3979;
}
.events-this-week {
  width: 100vw;
  height: 150vh;
  background: #EEEEEE;
}
.upcoming-events {
  width: 100vw;
  height: 80vh;
  background: #1F3979;
}
.join-us {
  width: 100vw;
  height: 30vh;
  background: #EEEEEE;
}
.footer {
  width: 100vw;
  height: 10vh;
  background: #1F3979;
}
.jump-to-top {
  width: 7vh;
  height: 7vh;
  position: fixed;
  background-color: #FFFFFF;
  bottom: 5%;
  right: 5%;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  transition: .5s;
}
.jump-to-top:hover {
  opacity: 1;
}
.jump-to-top-fadein {
  pointer-events: auto;
  animation: jump-to-top-fadein 0.5s forwards;
}
.jump-to-top-fadeout {
  pointer-events: none;
  animation: jump-to-top-fadeout 0.5s forwards;
}
@keyframes jump-to-top-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
@keyframes jump-to-top-fadeout {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}

svg {
  width: 150%;
  height: 150%;
  animation: arrow 2s infinite;
}
@keyframes arrow {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
