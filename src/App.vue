<template>
  <div class="app-wrapper" :style="backgroundStyle">
    <main-layout
      :page-title="currentPage"
      :top-title="topTitle"
      :top-subtitle="topSubtitle"
    >
      <template #mainContent>
        <router-view />
      </template>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";

export default {
  provide() {
    return {
      setCurrentPage: this.setCurrentPage,
    };
  },
  components: {
    MainLayout,
  },
  data() {
    return {
      currentPage: "Welcome",
      topTitle: "Hello world!",
      topSubtitle: "I’m Okan, a Passionate Web Developer",
      bgImage: "x.png",
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require(`@/assets/pics/${this.bgImage}`)})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    },
  },
  methods: {
    setCurrentPage(page, topT, subTT, bgImage) {
      this.currentPage = page;
      this.topTitle = topT;
      this.topSubtitle = subTT;
      this.bgImage = bgImage || "a.jpg";
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Poiret One", serif;
}

.app-wrapper {
  height: 100vh;
  overflow: hidden;
}

body {
  cursor: url("../public/bf1_107.cur"), auto;
}

@media all and (max-width: 1366px) {
  .app-wrapper {
    height: auto;
    min-height: 100vh;
  }
}
@media all and (max-width: 1200px) {
  .app-wrapper {
    height: auto;
    min-height: 100vh;
  }
}
</style>
