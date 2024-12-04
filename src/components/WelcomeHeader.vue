<template>
  <div id="container">
    <p id="typewriter">{{ displayedText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      typeWriterText: this.text || "Default Text",
      displayedText: "",
      index: 0,
      speed: 100,
    };
  },
  methods: {
    typeWriter() {
      if (this.index < this.typeWriterText.length) {
        this.displayedText += this.typeWriterText.charAt(this.index);
        this.index++;
        setTimeout(this.typeWriter, this.speed);
      }
    },
  },
  mounted() {
    this.typeWriter();
  },
};
</script>

<style scoped>
#container {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#typewriter {
  font-size: 24px;
  border-right: 2px solid;
  width: fit-content;
  animation: blink 0.7s step-end infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
