<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/title-icon.png" alt="logo" width="80" height="80" />
    </div>
    <div class="brand">
      <strong>UTMCAPS</strong>
    </div>
    <div class="nav-continer">
      <div class="nav-item"><a href="#home">Home</a></div>

      <div class="nav-item">
        <a href="#programs-events">About Us</a>
        <div class="dropdown-content">
          <a href="#people">People Directory</a>
          <a href="#financial">Financial Information</a>
        </div>
      </div>
      <div class="nav-item">
        <a href="#events">Event</a>
        <div class="dropdown-content">
          <!-- <a href="#wechat-official">WeChat Official</a> -->
        </div>
      </div>
      <div class="nav-item">
        <a href="#resources">Resources</a>
        <div class="dropdown-content">
          <a href="#post">Posts</a>
          <a href="#rop-list">UTM ROP List</a>
        </div>
      </div>

      <div class="nav-item">
        <a href="#contact-us">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.navbar {
  min-width: 100%;
  display: flex;
  background-color: #1f3979;
  color: white;
}

.nav-continer {
  display: flex;
  flex-grow: 1;
  margin-right: 2%;
}

.navbar .logo {
  margin-left: 2%;
}

.navbar .logo img {
  transform: scale(1.1);
}

.navbar .brand {
  text-decoration: none;
  font-size: 2rem;
  color: #fff;
  background-color: #1f3979;
  padding: 23px;
  flex-basis: 25%;
  letter-spacing: 0.5px;
}
.navbar .brand strong {
  display: block;
}
.navbar .nav-item {
  position: relative;
  flex-basis: 15%;
  padding: 33px;
  text-align: center;
  background-color: #1f3979;
  font-size: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.navbar .nav-item:hover {
  background-color: #546182;
}
.navbar a {
  color: white;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
}

.dropdown-content a {
  background-color: #1f3979;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 3px;
  color: white;
  padding: 20px 20px;
  text-decoration: none;
  display: block;
  text-align: center;
  box-sizing: border-box;
  opacity: 0;
  animation: dropdown-item-animation 0.2s ease-in-out forwards;
}

.dropdown-content a:hover {
  background-color: #546182;
}

.dropdown-content a:nth-child(1) {animation-delay: calc(0);}
.dropdown-content a:nth-child(2) {animation-delay: calc(0.1s);}
.dropdown-content a:nth-child(3) {animation-delay: calc(0.2s);}
.dropdown-content a:nth-child(4) {animation-delay: calc(0.3s);}

.nav-item:hover .dropdown-content {
  display: block;
}

@keyframes dropdown-item-animation {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
