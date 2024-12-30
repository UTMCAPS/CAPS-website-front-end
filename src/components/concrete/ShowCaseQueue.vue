<script setup>
import { ref } from "vue";
import ShowCaseBlock from "@/components/concrete/ShowCaseBlock.vue";

const boxRef = ref(null);
</script>

<template>
  <div class="box-container">
    <div class="box" ref="boxRef">
      <div class="queue-element">
      </div>
      <div class="queue-element">
        <ShowCaseBlock/>
      </div>
      <div class="queue-element">
        <ShowCaseBlock/>
      </div>
      <div class="queue-element">
        <ShowCaseBlock/>
      </div>
      <div class="queue-element">
        <ShowCaseBlock/>
      </div>
      <div class="queue-element">
        <ShowCaseBlock/>
      </div>
      <div class="queue-element">
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.queue-element {
  flex: 0 0 auto;
  width: 27vw;
  height: 60vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>