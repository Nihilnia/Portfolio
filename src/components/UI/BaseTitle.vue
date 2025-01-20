<template>
  <h1 class="typewriter">{{ displayedTitle }}<span class="cursor">|</span></h1>
</template>

<script>
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
} from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Default value", // Provide a default value for title if not passed
    },
  },
  setup(props) {
    const displayedTitle = ref("");
    let interval = null;

    // Function to type the title
    const typeTitle = () => {
      // Ensure title is a valid string, fallback to "Default value" if it's null or undefined
      const title = props.title ? String(props.title) : "Default value";
      if (title === "") return; // Ensure title is not empty
      if (interval) clearInterval(interval); // Clear any previous interval
      displayedTitle.value = ""; // Reset the title
      let i = 0;
      interval = setInterval(() => {
        if (i < title.length) {
          displayedTitle.value += title[i];
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
        nextTick(() => {
          typeTitle(); // Ensure that the DOM is updated before starting the typing effect
        });
      }
    );

    onMounted(() => {
      nextTick(() => {
        typeTitle(); // Start typing the title after the component has been fully mounted
      });
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
