<script setup>

import ShowCaseBlock from "@/components/concrete/ShowCaseBlock.vue";
</script>

<template>
  <div class="box">
    <div class="queue-element">
      <ShowCaseBlock/>
    </div>
    <div class="queue-element">
      <ShowCaseBlock/>
    </div>
    <div class="queue-element">
      <ShowCaseBlock/>
    </div>
    <button class="next"></button>
  </div>
</template>

<style scoped>
.box {
  height: 100%;
  padding-left: 40vw;
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  overflow-x: scroll;
  direction: rtl;
}
.queue-element {
  width: 40vw;
  height: 60vh;
}
.next {
  width: 5vh;
  height: 5vh;
  position: absolute;
  bottom: 10vh;
  left: 90vw;
  border-radius: 50%;
}
</style>