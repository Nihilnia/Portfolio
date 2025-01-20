<template>
  <h1 class="typewriter">{{ displayedTitle }}<span class="cursor">|</span></h1>
</template>

<script>
import { defineComponent, ref, watch, onMounted, onUnmounted } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
      default: "Default value",
    },
  },
  setup(props) {
    const displayedTitle = ref("");
    let interval = null;

    // Function to type the title
    const typeTitle = () => {
      if (!props.title) return; // Check if title is null, undefined, or empty
      if (interval) clearInterval(interval); // Clear any previous interval
      displayedTitle.value = ""; // Reset the title
      let i = 0;
      interval = setInterval(() => {
        if (i < props.title.length) {
          displayedTitle.value += props.title[i];
          i++;
        } else {
          clearInterval(interval);
          interval = null; // Clean up the interval
        }
      }, 100);
    };

    // Watch for changes in the `title` prop and retype the title
    watch(
      () => props.title,
      (newTitle) => {
        console.log("New title:", newTitle); // Log the title value for debugging
        typeTitle();
      }
    );

    onMounted(() => {
      typeTitle(); // Start typing the title when the component is mounted
    });

    onUnmounted(() => {
      if (interval) clearInterval(interval); // Clean up the interval when the component is destroyed
    });

    return {
      displayedTitle,
    };
  },
});
</script>

<style scoped>
.typewriter {
  font-size: 70px;
  text-align: center;
}

.cursor {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
