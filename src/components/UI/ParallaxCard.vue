<template>
  <div id="container">
    <div
      ref="cardRef"
      class="pc"
      :style="cardStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div>
        <img :src="compCardImg" alt="" />
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <div id="links">
        <a :href="gitHubLink" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a :href="webLink" target="_blank"><i class="fa-solid fa-link"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParallaxCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided.",
    },
    bgImage: {
      type: String,
    },
    webLink: {
      type: String,
    },
    gitHubLink: {
      type: String,
    },
  },
  data() {
    return {
      rotation: {
        rotateX: 0,
        rotateY: 0,
        translateZ: 0,
      },
    };
  },
  computed: {
    cardStyle() {
      return {
        transform: `perspective(1000px) rotateX(${this.rotation.rotateX}deg) rotateY(${this.rotation.rotateY}deg) translateZ(${this.rotation.translateZ}px)`,
      };
    },
    compCardImg() {
      return require(`@/assets/pics/${this.bgImage}`);
    },
  },
  methods: {
    handleMouseMove(event) {
      const card = this.$refs.cardRef; // Access cardRef through this.$refs
      if (!card) return;

      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      this.rotation.rotateX = -(mouseY / height) * 20; // Max rotation of 20 degrees
      this.rotation.rotateY = (mouseX / width) * 20;
      this.rotation.translateZ = 50;
    },
    handleMouseLeave() {
      this.rotation.rotateX = 0;
      this.rotation.rotateY = 0;
      this.rotation.translateZ = 0;
    },
  },
};
</script>

<style scoped>
.pc {
  height: fit-content;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 44px;
  padding-bottom: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 18px;
}

.pc p {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
}

div > div {
  margin: auto;
  max-width: 80%;
}

div > img {
  filter: brightness(0) invert(1);
  max-width: 24%;
  width: 100%;
}

.pc > div {
  text-align: center;
}

a {
  color: #fff;
}

#links {
  display: flex;
  column-gap: 10px;
  max-width: fit-content;
  margin-top: 20px;
}

@media all and (max-width: 1366px) {
  .pc {
    height: 300px;
  }
}
</style>
