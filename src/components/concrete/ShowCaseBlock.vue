<script>
export default {
  props: {
    title: {
      type: String,
      default: "选课答疑常见问题"
    },
    date: {
      type: String,
      default: "Jan.15th 2025"
    },
    description: {
      type: String,
      default: "Ask any question related to course"
    },
    image: {
      type: String,
      default: "jpg/homePage/placeholder-who-we-are.jpg"
    },
  },
};
</script>

<template>
  <div class="card">
    <img class="image" :src="require('@/assets/' + image)" alt="Event Image" />
    <div class="content">
      <div class="content-text">
        <h3 class="title">{{ title }}</h3>
        <div class="date">
          <p class="date-line">|</p>
          <p class="date-text">{{ date }}</p>
        </div>
        <p class="description">{{ description }}</p>
      </div>
      <div class="content-button">
        <button class="arrow-button">→</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 15%;
  margin-right: 15%;
  height: 80%;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.image {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.content {
  height: 50%;
  display: flex;
  justify-content: space-between;
  padding: 5%;
}

.content-text {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0051b1;
  margin: 2% 0%;
}

.date {
  display: flex;
  align-items: center;
}

.date-line {
  font-size: 1rem;
  color: #0051b1;
  font-weight: bold;
  margin-right: 2%;
}

.date-text {
  font-size: 1rem;
  color: #8f8f8f;
}

.description {
  font-size: 0.9rem;
  color: #8f8f8f;
  margin-bottom: 1rem;
}

.content-button {
  display: flex;
  align-items: center;
}

.arrow-button {
  width: 3rem;
  height: 3rem;
  background-color: #0051b1;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.arrow-button:hover {
  background-color: #003d91;
  transform: scale(1.1);
}
</style>