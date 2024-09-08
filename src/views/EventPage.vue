<template>
  <div class="EventPage">
    <div class="container">
      <h1>Events</h1>

      <!-- Events Today Section -->
      <div class="event-section">
        <h2>Events Today</h2>
        <EventCard
          :title="`Today Event`"
          :date="`Today, 3-5PM @IB Building`"
          :description="`Join us for...`"
          :imageUrl="require('@/assets/title-icon.png')"
        />
      </div>

      <!-- Upcoming Events Section -->
      <div class="event-section">
        <h2>Upcoming Events</h2>
        <EventCard
          :title="`Feature Event`"
          :date="`Nov. 2 Thursday 5:30PM - 7:30PM @IB 120`"
          :description="`Learn from industry...`"
          :imageUrl="require('@/assets/title-icon.png')"
        />
      </div>

      <!-- Past Events Section -->
      <div class="event-section">
        <h2>Past Events</h2>
        <ImageLineUp3Vue />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import ImageLineUp3Vue from '@/components/imageLineUp3.vue';

export default {
  name: "EventPage",
  components: {
    EventCard,
    ImageLineUp3Vue,
  },
};
</script>

<style scoped>
.EventPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  margin: 0 auto;
  width: calc(100vw - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: #1F3979;
  margin-bottom: 20px;
}
.event-section {
  width: 100%;
  max-width: 1300px;
  margin-bottom: 40px;
}
h2 {
  color: #1F3979;
  margin-bottom: 10px;
}
</style>
