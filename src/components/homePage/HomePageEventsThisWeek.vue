<script setup>
import SingleShowCaseLeft from "@/components/concrete/ShowCaseLeft.vue";
import SingleShowCaseRight from "@/components/concrete/ShowCaseRight.vue";
</script>

<script>
export default {
  data() {
    return {
      page: "/event"
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="context">
      <div class="title">Events This Week</div>
      <div class="event">
        <SingleShowCaseLeft :page = page />
      </div>
      <div class="event">
        <SingleShowCaseRight :page = page />
      </div>/
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  position: relative;
}
.context {
  margin-top: -2%;
  position: absolute;
  width: 100%;
  height: 100%;
}
.title {
  font-family: "Times New Roman", Times, serif;
  font-size: 4rem;
  font-weight: bold;
  padding-left: 2vw;
  color: #0051B1;
}
.event {
  width: 100%;
  height: 60vh;
}
</style>