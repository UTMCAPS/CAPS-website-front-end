<script setup>
import { ref } from "vue";
import ShowCaseBlock from "@/components/concrete/ShowCaseBlock.vue";

const boxRef = ref(null);
const scrollToNext = () => {
  if (boxRef.value) {
    const scrollAmount = boxRef.value.querySelector('.queue-element').offsetWidth; 
    boxRef.value.scrollBy({
      left: scrollAmount,
      behavior: "smooth", 
    });
  }
};
const scrollToPrevious = () => {
  if (boxRef.value) {
    const scrollAmount = boxRef.value.querySelector('.queue-element').offsetWidth; 
    boxRef.value.scrollBy({
      left: -scrollAmount,
      behavior: "smooth", 
    });
  }
};

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
  <button class="prev" @click="scrollToPrevious">
    <img src="@/assets/svg/keyboard_arrow_left_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="Previous" class="arrow-icon">
  </button>
  <button class="next" @click="scrollToNext">
    <img src="@/assets/svg/keyboard_arrow_right_24dp_2C3E50_FILL0_wght400_GRAD0_opsz24.svg" alt="Next" class="arrow-icon">
  </button>
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
.prev, .next {
  width: 8%;
  height: 8%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  opacity: 0.2;
  transition: 0.3s;
}

.prev {
  left: 3%;
}
.next {
  right: 3%;
}

.arrow-icon {
  width: 300%;
  height: 300%;
  fill: #1F3979;
}

.prev:hover, .next:hover {
  opacity: 0.6;
  transform: scale(1.1);
}


</style>