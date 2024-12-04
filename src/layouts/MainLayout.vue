<template>
  <div id="container-main">
    <SidebarComponent />
    <div id="content"><slot name="mainContent" /></div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "MainLayout",
  components: { SidebarComponent },
  props: ["content"],
};
</script>

<style scoped>
#container-main {
  height: 100vh;
  display: grid;
  max-width: 100%;
  width: 100%;
  grid-template-columns: 12.5% 87.5%;
  background-image: url(../assets/images/GG.png);
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: -10%;
  background-size: cover;
  background-size: 110%;
}

#content {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
