<template>
  <div class="AboutUs">
    <div class="container">
      <div class="minister">
        <h1>部长</h1>
        <div class="members">
          <PersonInfoCard />
        </div>
      </div>
      <div class="leader">
        <h1>管理层</h1>
        <div class="members">
          <div v-for="i in 3" :key="i">
            <PersonInfoCard />
          </div>
        </div>
      </div>
      <div class="member">
        <h1>部员</h1>
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
import PersonInfoCard from "@/components/PersonInfoCard.vue";

export default {
  name: "PeopleDirectory",
  components: {
    PersonInfoCard,
  },
  setup() {
    return {};
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
.member .members div {
  transform: scale(0.9);
  margin: -15px;
}
</style>
