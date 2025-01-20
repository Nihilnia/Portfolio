<template>
  <!-- <h2>
    I build modern, responsive websites and applications with a focus on clean
    code and user experience.
  </h2> -->

  <div id="Gloria">
    My name is Okan, a full-stack web developer. <br />
    I like to create reactive, dynamic web pages. <br />
    I have 4+ years of experience. <br />
    My favorite framework is Vue.
  </div>

  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</template>
<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage(
      "Welcome",
      "Hello world!",
      "I’m Okan, a Passionate Web Developer",
      "x.png"
    );
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

#Gloria {
  height: 144px;
  border-left: 1px solid #fff;
  font-size: 34px;
  line-height: 1;
  padding: 44px;
  max-width: fit-content;
  margin-left: 4%;
  margin-top: 144px;
  font-weight: 500;
}

.particle {
  position: absolute;
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  box-shadow: 0 0 15px 5px red;
  animation: float 5s infinite ease-in-out;
}

/* Generate multiple particles */
.particle:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}
.particle:nth-child(2) {
  top: 50%;
  left: 30%;
  animation-delay: 1s;
}
.particle:nth-child(3) {
  top: 70%;
  left: 15%;
  animation-delay: 2s;
}
.particle:nth-child(4) {
  top: 30%;
  left: 80%;
  animation-delay: 3s;
}
.particle:nth-child(5) {
  top: 60%;
  left: 60%;
  animation-delay: 4s;
}
.particle:nth-child(6) {
  top: 10%;
  left: 50%;
  animation-delay: 1.5s;
}
.particle:nth-child(7) {
  top: 40%;
  left: 70%;
  animation-delay: 0.5s;
}
.particle:nth-child(8) {
  top: 80%;
  left: 40%;
  animation-delay: 2.5s;
}
.particle:nth-child(9) {
  top: 25%;
  left: 65%;
  animation-delay: 3.5s;
}
.particle:nth-child(10) {
  top: 50%;
  left: 90%;
  animation-delay: 2.8s;
}
.particle:nth-child(11) {
  top: 60%;
  left: 90%;
  animation-delay: 2.8s;
}
.particle:nth-child(12) {
  bottom: 17%;
  left: 23%;
  animation-delay: 2.8s;
}
.particle:nth-child(13) {
  top: 40%;
  left: 60%;
  animation-delay: 2.8s;
}
.particle:nth-child(14) {
  top: 20%;
  left: 90%;
  animation-delay: 2.8s;
}

/* Animation for floating particles */
@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) translateX(10px) scale(1.2);
    opacity: 0.8;
  }
}
</style>
