import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import PeopleDirectory from "@/views/PeopleDirectory.vue";
import NotFound from "@/views/NotFound.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";
import FinancialInformation from "@/views/FinancialInformation.vue";
import Posts from "@/views/PostsPage.vue";
import Resources from "@/views/ResourcesPage.vue";
import UpcomingEvents from "@/views/EventPage.vue";
import UtmropList from "@/views/UtmropList.vue";
const routes = [
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/event",
    name: "EventPage",
    component: UpcomingEvents,
  },
  {
    path: "/financial-information",
    name: "FinancialInformation",
    component: FinancialInformation,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/people",
    name: "PeopleDirectory",
    component: PeopleDirectory,
  },
  {
    path: "/post",
    name: "PostsPage",
    component: Posts,
  },
  {
    path: "/resources",
    name: "ResourcesPage",
    component: Resources,
  },
  {
    path: "/utm-rop-list",
    name: "UtmropList",
    component: UtmropList,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
