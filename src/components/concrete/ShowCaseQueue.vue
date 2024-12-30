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
        <ShowCaseBlock />
      </div>
      <div class="queue-element">
        <ShowCaseBlock />
      </div>
      <div class="queue-element">
        <ShowCaseBlock />
      </div>
      <div class="queue-element">
        <ShowCaseBlock />
      </div>
      <div class="queue-element">
        <ShowCaseBlock />
      </div>
    </div>
    <button class="prev" @click="scrollToPrevious">←</button>
    <button class="next" @click="scrollToNext">→</button>
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
  gap: 20px;
  padding: 0 5%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.queue-element {
  flex: 0 0 auto;
  width: 40vw;
  height: 60vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev, .next {
  width: 4rem;
  height: 4rem;
  background-color: #0153B2;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  z-index: 1000;
  position: absolute;
  top: 66%;
}

.prev {
  left: 2%;
}

.next {
  right: 2%;
}

.prev:hover, .next:hover {
  background-color: #003d91;
  transform: scale(1.1);
}

.box::-webkit-scrollbar {
  display: none;
}
</style>