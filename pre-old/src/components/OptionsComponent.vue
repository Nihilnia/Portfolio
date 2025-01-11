<template>
  <div id="container-options">
    <ToggleSwitchComponent text="Hide sidebar" @click="handleHideSidebar" />
  </div>
</template>

<script>
import ToggleSwitchComponent from "./ToggleSwitchComponent.vue";
export default {
  name: "OptionsComponent",
  components: {
    ToggleSwitchComponent,
  },
  props: {
    handleHideSidebar,
  },
};
</script>

<style scoped>
#container-options {
  background-color: red;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
