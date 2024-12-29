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
import NavigationBar from "@/components/NavigationBar.vue";

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
}
.banner {
  width: 100vw;
  height: 85vh;
  background: #1F3979;
}
.slogan {
  width: 100vw;
  height: 15vh;
  background: #EEEEEE;
}
.about-us {
  width: 100vw;
  height: 120vh;
  background: #1F3979;
}
.events-this-week {
  width: 100vw;
  height: 130vh;
  background: #EEEEEE;
}
.upcoming-events {
  width: 100vw;
  height: 80vh;
  background: #1F3979;
}
.join-us {
  width: 100vw;
  height: 20vh;
  background: #EEEEEE;
}
.footer {
  width: 100vw;
  height: 30vh;
  background: #1F3979;
}
</style>
