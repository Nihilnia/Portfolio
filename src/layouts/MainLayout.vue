<template>
  <div id="container-main" :style="containerStyle">
    <SidebarComponent :currentPage="currentPage" />
    <div id="content"><slot name="mainContent" /></div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "MainLayout",
  components: { SidebarComponent },
  props: {
    bgImage: {
      type: String,
      default: require("@/assets/images/GG.png"),
    },
    currentPage: {
      type: String,
    },
    posX: {
      type: String,
      default: "0",
    },
    bgSize: {
      type: String,
      default: "cover",
    },
  },
  computed: {
    containerStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionX: this.posX,
        backgroundSize: this.bgSize,
      };
    },
  },
};
</script>

<style scoped>
#container-main {
  height: 100vh;
  display: grid;
  max-width: 100%;
  width: 100%;
  grid-template-columns: 12.5% 87.5%;
}

#content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 50px;
}
</style>
