<template>
  <MainLayout currentPage="about">
    <slot name="mainContent">
      <h1>About</h1>
    </slot>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "AboutPage",
  components: { MainLayout },
};
</script>

<style scoped></style>
