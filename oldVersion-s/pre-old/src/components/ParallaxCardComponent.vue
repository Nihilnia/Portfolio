<template>
  <div class="relative-card">
    <div
      class="card"
      :style="{
        backgroundImage: `url(${bgImg})`,
        transform: `perspective(1000px) rotateX(${card.rotateX}deg) rotateY(${card.rotateY}deg)`,
      }"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @click="handleCardClick"
    >
      <div class="content">
        <h2 class="title">{{ title }}</h2>
        <p class="subtitle">{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { defineProps } from "vue";

// Define props
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Default Title",
  },
  subTitle: {
    type: String,
    required: false,
    default: "Default Subtitle",
  },
  bgImg: {
    type: String,
    required: false,
    default: require("@/assets/images/GG.png"), // Set a default image path
  },
  projectLink: {
    type: String,
    required: false,
    default: "#",
  },
});

// Reactive card properties
const card = reactive({
  rotateX: 0,
  rotateY: 0,
});

// Handle mouse movement for 3D effect
const handleMouseMove = (event) => {
  const cardRect = event.target.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  const mouseX = event.clientX - cardCenterX;
  const mouseY = event.clientY - cardCenterY;

  card.rotateY = (mouseX / cardRect.width) * 30; // Rotate card on X-axis
  card.rotateX = -((mouseY / cardRect.height) * 30); // Rotate card on Y-axis
};

// Reset rotation on mouse leave
const handleMouseLeave = () => {
  card.rotateX = 0;
  card.rotateY = 0;
};

// Navigate to the defined page on card click
const handleCardClick = () => {
  window.open(props.projectLink, "_blank");
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  height: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-out;
  background-size: cover;
  background-position: center;
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  opacity: 0;
  transition: opacity 0.3s;
} */

.card:hover::before {
  opacity: 1;
}

.content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
}

.subtitle {
  color: white;
}

@media all and (max-width: 1200px) {
  .card {
    height: 200px;
  }

  .title {
    font-size: 1rem;
  }
}
</style>
