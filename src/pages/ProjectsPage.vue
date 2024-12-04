<template>
  <MainLayout>
    <slot name="mainContent">
      <h1>Projects</h1>
    </slot>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "ProjectsPage",
  components: { MainLayout },
};
</script>

<style scoped></style>
