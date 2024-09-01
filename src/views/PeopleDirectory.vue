<template>
  <div class="AboutUs">
    <div class="container">
      <div
        class="president section"
        :class="{ visible: sectionsVisible.president }"
        ref="presidentSection"
      >
        <h1 class="role-title">社长</h1>
        <div class="members">
          <PersonInfoCard />
        </div>
      </div>

      <div class="div-line"></div>

      <div
        class="leader section"
        :class="{ visible: sectionsVisible.leader }"
        ref="leaderSection"
      >
        <h1 class="role-title">管理层</h1>
        <div class="members">
          <div v-for="i in 3" :key="i">
            <PersonInfoCard />
          </div>
        </div>
      </div>

      <div class="div-line"></div>

      <div
        class="member section"
        :class="{ visible: sectionsVisible.member }"
        ref="memberSection"
      >
        <h1 class="role-title">部员</h1>
        <div class="members">
          <div v-for="i in 6" :key="i">
            <PersonInfoCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PersonInfoCard from "@/components/PersonInfoCard.vue";

export default {
  name: "PeopleDirectory",
  components: {
    PersonInfoCard,
  },
  setup() {
    const sectionsVisible = ref({
      president: false,
      leader: false,
      member: false,
    });

    const presidentSection = ref(null);
    const leaderSection = ref(null);
    const memberSection = ref(null);

    const observeSection = (section, sectionKey) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              sectionsVisible.value[sectionKey] = true;
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section.value);
    };

    onMounted(() => {
      observeSection(presidentSection, "president");
      observeSection(leaderSection, "leader");
      observeSection(memberSection, "member");
    });

    return {
      sectionsVisible,
      presidentSection,
      leaderSection,
      memberSection,
    };
  },
};
</script>

<style scoped>
.AboutUs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}
.members {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.section {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.section.visible {
  opacity: 1;
}
.member .members div {
  transform: scale(0.9);
  margin: -15px;
}
.div-line {
  margin-top: 10px;
  border-top: 1px solid #424242b3;
  margin-bottom: 150px;
}
.role-title {
  font-size: 3rem;
  color: #1f3979;
  font-family: cursive;
}
</style>
