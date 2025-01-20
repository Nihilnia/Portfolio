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
      currentPage: null,
      topTitle: "Hello world!",
      topSubtitle: null,
      bgImage: "a.jpg",
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
