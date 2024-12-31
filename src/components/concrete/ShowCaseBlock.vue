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
    page: {
      type: String,
      default: "/default"
    }
  },
};
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="require('@/assets/' + image)" alt=""/>
    </div>
    <div class="content">
      <h1>{{ title }}</h1>
      <div class="date">
        <p>{{ date }}</p>
      </div>
      <div class="description">
        <p>{{ description }}</p>
      </div>
      <router-link class="button" to={{pge}} >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#024BAF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 80%;
  background-color: #FFFFFF;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card:hover {
  transform: scale(1.1);
}
.image {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  padding-left: 3vw;
}
h1 {
  color: #0051B1;
  font-size: 1.7rem;
  padding-bottom: 0;
  margin-bottom: 0;
}
p {
  color: #8F8F8F;
  padding: 1%;
  margin: 0;
}
.date {
  border-color: #0051B1;
  border-width: 2px;
  border-left-style: solid;
  padding-left: 1vw;
}
.description {
  padding-top: 3vh;
}
.button {
  bottom: 3vh;
  right: 5vw;
  position: absolute;
  text-decoration: none;
  transition: .5s;
}
svg {
  width: 200%;
  height: 200%;
  animation: arrow 2s infinite;
}
@keyframes arrow {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(10px);
  }
}
</style>