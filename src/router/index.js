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
    path: "/",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/",
    name: "EventPage",
    component: UpcomingEvents,
  },
  {
    path: "/",
    name: "FinancialInformation",
    component: FinancialInformation,
  },
  {
    path: "/home",
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
    path: "/",
    name: "PostsPage",
    component: Posts,
  },
  {
    path: "/",
    name: "ResourcesPage",
    component: Resources,
  },
  {
    path: "/",
    name: "UtmropList",
    component: UtmropList,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
