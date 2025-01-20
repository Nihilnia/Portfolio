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
      default: "Default value",
    },
  },
  setup(props) {
    const displayedTitle = ref(props.title || "Default value");
    let interval = null;

    const typeTitle = () => {
      const title = props.title ? String(props.title) : "Default value";
      if (title === "") return;
      if (interval) clearInterval(interval);
      displayedTitle.value = "";
      let i = 0;
      interval = setInterval(() => {
        if (i < title.length) {
          displayedTitle.value += title[i];
          i++;
        } else {
          clearInterval(interval);
          interval = null;
        }
      }, 100);
    };

    watch(
      () => props.title,
      (newTitle) => {
        console.log("New title:", newTitle);
        nextTick(() => {
          typeTitle();
        });
      }
    );

    onMounted(() => {
      nextTick(() => {
        typeTitle();
      });
    });

    onUnmounted(() => {
      if (interval) clearInterval(interval);
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
