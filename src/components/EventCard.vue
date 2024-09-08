<template>
  <div class="event-card">
    <img :src="imageUrl" alt="Event Image" />
    <div class="event-info">
      <h3>{{ title }}</h3>
      <p>{{ date }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",

  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: require("@/assets/title-icon.png"),
    },
  },
};
</script>

<style scoped>
.event-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  max-width: 100%;
}
.event-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.event-info {
  padding: 20px;
  color: #333;
}
.event-info h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}
.event-info p {
  font-size: 1em;
  margin-bottom: 5px;
}
</style>
